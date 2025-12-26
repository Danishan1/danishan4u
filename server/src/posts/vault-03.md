# Designing a Secure, Zero-Trust File Vault: Encryption, Keys, and Access Control

### 1 — Threat model (short)

Protect files against:

- Cloud/storage compromise (S3/GCS leak)
- Compromised Vault server or operator
- Network MITM
- Insider exfiltration
- Ransomware / tampering
- Malicious or mistaken sharing
- Long-term confidentiality (post-quantum consideration later)

Controls focus on confidentiality, integrity, authenticity, and controlled availability.

### 2 — High-level approach (summary)

1. **Envelope encryption for every file**: generate a random per-file DEK, encrypt file with AEAD (AES-256-GCM or ChaCha20-Poly1305), then wrap DEK with a KEK in KMS/HSM.
2. **Chunked / streaming AEAD for large files**: encrypt in chunks with sequence-associated nonces to support streaming upload/download, resumability, and parallelism.
3. **Client-side encryption option**: let users pre-encrypt client-side for zero-trust confidentiality (myVault stores only wrapped DEKs + ciphertext). Offer both modes: client-side (recommended for highest privacy) and server-side (better UX).
4. **Metadata separation & blind indexes**: keep metadata encrypted; allow searchable metadata via deterministic blind-indexing or client-side search indices. Avoid storing sensitive metadata plaintext.
5. **Signed integrity & audit**: sign file manifests (file ID, version, owner, content-hash) with Ed25519; store audit logs in WORM.
6. **Access control & lease**: every file access requires an ephemeral token/lease; access is logged; downloads stream decrypted content only to authorized clients or agent.
7. **Secure preview generation**: generate thumbnails/previews in an isolated environment where decrypted content is handled in-memory or ephemeral VMs; store previews encrypted with separate DEKs and stricter policies.
8. **Key lifecycle & rewrap**: support KEK rotation by rewrapping DEKs, with efficient rewrap workflows.
9. **Secure deletion & backups**: shred DEKs and mark versions deleted; keep encrypted backups separately; key destruction makes backups unreadable.
10. **Optional advanced features**: searchable encryption, DRM, watermarking, threshold unlocking (Shamir/MPC), legal escrow workflows.

### 3 — Cryptography: algorithms & primitives

- **Authenticated encryption (AEAD)**: AES-256-GCM or ChaCha20-Poly1305. Use AES-GCM if hardware AES available; ChaCha20-Poly1305 for devices without AES acceleration.
- **Key wrapping / KEK**: Use HSM/KMS (AWS KMS, GCP KMS, Azure Key Vault) to store KEK and perform wrap/unwrap operations (or use HSM for on-prem). Use KMS wrap APIs rather than exporting KEK. If you must wrap in-app, use AES-KWP (RFC 5649) or RSA-OAEP for asymmetric wrap.
- **Signing**: Ed25519 for signatures (fast, small, modern). Use for manifest and log signatures.
- **Hashes**: SHA-256 or SHA-3 for content hashes.
- **Password-derived keys**: Argon2id for any passphrase-based encryption.
- **Nonce/IV**: Use unique per-chunk nonces. Never reuse nonce-key pair. Include chunk sequence number in associated data.
- **Randomness**: Use OS CSPRNG (getrandom / libsodium) for DEKs, nonces, salts.

Consider a PQ roadmap: plan to support post-quantum KEM for KEK in future (NIST PQC compliance).

### 4 — File encryption: per-file envelope model (recommended)

For each uploaded file:

1. **Client/server** generates random `DEK` (256-bit).
2. **Encrypt file content** with AEAD using DEK. For large files use chunked mode (see next). Include associated data (file metadata hash, owner id, version) in AEAD to bind metadata to content.
3. **Wrap DEK** with KEK via KMS Wrap API → produce `wrapped_DEK` and store `key_version` id.
4. **Compute content-hash** (SHA-256) of ciphertext for integrity and dedup.
5. **Store**: ciphertext object in object storage (S3/GCS) + encrypted metadata record (manifest) in Vault DB: `{file_id, wrapped_DEK, key_version, AEAD_algo, chunk_size, content_hash, mime, owner, ACLs, signature}`.
6. **Sign** manifest with server signing key (Ed25519) and append audit entry.

Advantages: if storage is stolen, ciphertext is useless without KEK. If Vault is compromised but KMS not, attackers cannot unwrap DEK.

### 5 — Large files / streaming & chunking

Large files (videos, backups) require streaming encryption:

Pattern:

- Choose chunk size (e.g., 4–16 MiB).
- For each chunk `i`:
  - Use AEAD with DEK and a unique nonce derived from file-id + chunk-index (e.g., HMAC-based nonce derivation) or use an AEAD streaming construction (e.g., RFC 9180: MLS-like? or use libsodium's secretstream API).
  - Include `associated_data = (file_id, chunk_index, metadata_hash)` and AEAD tag.

- Store chunk objects as `fileid/chunk_i` in object storage. Maintain a manifest listing chunk hashes and order.
- Support resumable uploads: upload chunks independently, verify tags.
- Streaming download: download chunk by chunk, decrypt, and stream to client, validating tags as you go.

Implementation choices:

- Use libsodium `crypto_secretstream_xchacha20poly1305` for streaming AEAD (handles sequence and nonces safely).
- Or implement chunked AES-GCM with nonce derived via counter and per-file random salt (careful to avoid nonce reuse across re-uploads).

### 6 — Client-side vs Server-side encryption (tradeoffs)

- **Client-side encryption (CSE)**:
  - Strongest privacy: server never sees plaintext or DEK.
  - User holds a passphrase or hardware key; DEK wrapped with user key or uses Shamir split for recovery.
  - Complicates server-side features: previews, server-side search, content scanning, DRM.
  - Implementation: browser WebCrypto or desktop CLI using libsodium; upload `ciphertext + wrapped_DEK` to myVault.

- **Server-side encryption (SSE)**:
  - Better UX: myVault can generate previews, index content, search, and provide emergency recovery.
  - Server holds responsibility to protect KEK and perform wrap/unwrap via KMS/HSM.

- **Hybrid model** (recommended for myVault):
  - Default SSE for convenience, with optional CSE for privacy-sensitive users.
  - Offer client-managed keys (bring-your-own-key, BYOK) where user's KEK is in customer's KMS or user-supplied HSM.

### 7 — Metadata & search over encrypted files

- **Metadata policy**: treat filename, tags, descriptions as sensitive by default.
- **Search options**:
  1. **Client-side index**: clients maintain encrypted index; searching requires client to decrypt locally. Highest privacy.
  2. **Blind-index / deterministic tokenization**: server stores encrypted blind-index created by hashing normalized attribute with keyed HMAC (HMAC-SHA256 with a server key or per-user key). This allows equality search (exact match) but leaks frequency; avoid for sensitive attributes.
  3. **Searchable Symmetric Encryption (SSE)** or Order-Preserving methods: complex, weaker security; use only if necessary and warn about leakage.
  4. **Extracted metadata for preview-only**: generate server-side OCR/metadata in ephemeral sandbox and store minimal searchable tokens with restricted access and stronger logging.

- **Recommendation**: use client-side index or blind-index combined with strict access controls and audit for any server-side search.

### 8 — Previews, thumbnails & server-side processing (secure handling)

Previews require decrypting content server-side. Do it like this:

1. **Isolated processing environment**: ephemeral container/VM with no persistent storage, network egress limited, and ephemeral keys provisioned with least privilege.
2. **Decrypt in ephemeral memory**: the worker requests DEK unwrap from KMS for a very short TTL and only for the duration. Use memory zeroing after use.
3. **Generate thumbnails/previews** and store them encrypted with a separate DEK (preview_DEK) and stricter ACLs (only authorized users).
4. **Audit & attest**: log the preview generation event, sign the preview manifest. Optionally provide provenance attestation to the user.
5. **Reduce exposure**: do content sanitization (strip metadata, redact PII) before storing preview if possible.

### 9 — Sharing workflows & temporary access

- **Share-by-link (expiring)**:
  - Create a short-lived ephemeral access token/lease that grants read-only rights for a specific file and time window.
  - Proxy download through myVault service that streams decrypted content to the requester (SSE) or provide client-side wrapped_DEK to a trusted recipient who can unwrap via their KMS/credentials.

- **Multi-party release**:
  - Use threshold cryptography (Shamir or MPC) where DEK is split and each guardian holds a share; release requires quorum to reconstruct DEK and decrypt. This is perfect for your life-continuity feature.

- **Auditable approvals**:
  - For sensitive releases, require N-of-M approvals in UI; only after approvals are recorded and signed, the system unwraps DEK and either:
    - streams plaintext to recipients, or
    - rewraps DEK with recipients’ KEKs and stores the rewrapped DEKs so recipients can download themselves.

### 10 — Integrity, provenance & non-repudiation

- **Manifest & signature**:
  - For each file version, create a manifest JSON: `{file_id, version, content_hash, chunk_hashes[], owner_id, created_at, acl}`.
  - Sign manifest with server signing key (Ed25519). Keep signature and public key chain in audit logs.

- **Tamper detection**:
  - On download, validate content-hash and AEAD tags; if mismatch, reject and alert.

- **Versioning**:
  - Keep immutable versions (append-only) and support compare/restore. Versions store wrapped_DEKs for each version.

### 11 — Key lifecycle, rotation, & rewrap

- **KEK rotation**:
  - Rotate KEK in KMS/HSM; perform automated rewrap of stored wrapped_DEKs (DEK remains same) — this is inexpensive as you only rewrap per-file DEK, not re-encrypt blobs.

- **DEK rotation**:
  - For extremely sensitive files, rotate DEK by decrypting content and re-encrypting (costly; do per policy).

- **Revocation**:
  - To revoke access, delete wrapped_DEK or update policy so unwrapping returns error. For stronger revocation, re-encrypt (DEK rotation).

- **Backup keys**:
  - Back up KEKs and key metadata in geographically separated HSM, with strict access and quorum-based recovery.

### 12 — Secure deletion & retention

- **Logical deletion**:
  - Mark versions deleted, move wrapped_DEK to quarantine, and remove from listing. If you delete KEK or destroy wrapped_DEK, ciphertext becomes unrecoverable — permanent deletion.

- **Physical deletion**:
  - For S3: use lifecycle to delete chunk objects; ensure compliance with provider's deletion guarantees.

- **WORM backups**:
  - Keep encrypted backups with separate KEK lifecycle. Destroy backed-up KEK to render backup unreadable if needed.

### 13 — Ransomware & tamper defenses

- **Immutable versions & WORM logs** to detect modifications.
- **Air-gapped key backups**: KEK backups stored offline, requiring quorum-recovery.
- **Anomaly detection**: alert on mass download/rewrap operations or unusual requested unwrapping patterns.
- **Least privilege and ephemeral credentials** reduce windows for attackers.

### 14 — Legal, compliance & privacy considerations

- **Privacy-by-design**: default encrypt metadata; require user consent for server-side content processing.
- **Data residency**: allow region-specific KEKs & storage for customers.
- **Chain-of-custody**: signed manifests + audit logs for legal proof.
- **Legal access**: provide well-defined legal request flows with strong verification and audit (and, where possible, require court orders + key-escrow protocol).

### 15 — UX considerations (keep security usable)

- Offer **two modes**: frictionless (SSE) and privacy-first (CSE). Educate users on tradeoffs.
- For large uploads, show progress + resumable token.
- For previews, show redaction warnings if server had to decrypt.
- For inheritance workflows, allow user to preview the release plan and do test drills (simulate release to selected guardians) without actually releasing secrets.
- Provide clear recovery instructions: "If you lose keys, follow these steps..." and allow safe, auditable emergency access flows (with human approvals).

### 16 — Implementation notes & libraries (practical)

- **Server**: Go (crypto standard lib + libsodium bindings), Rust (ring + sodiumoxide), or Java with BouncyCastle. Go is pragmatic for concurrency and ecosystem.
- **Streaming AEAD**: libsodium `crypto_secretstream_xchacha20poly1305` for easy streaming with security properties.
- **Web client**: WebCrypto for AES-GCM and HKDF; libsodium.js for secretstream if needed. Beware of browser entropy & key storage. Use WebAuthn / Passkeys for key protection.
- **KMS/HSM integration**: Use cloud KMS SDKs for wrap/unwrap calls; never export KEK. Support BYOK via customer-managed KMS.
- **Thumbnail/Preview sandboxing**: run in Kubernetes ephemeral pods (gVisor or Firecracker microVMs) with strict egress.
- **Audit & logging**: immutable logs to Kafka -> SIEM; sign batches with Ed25519.

### 17 — Advanced options (pick as needed)

- **Threshold decryption using MPC**: replace single KEK with MPC-based unwrapping to avoid single-key trust. Useful for life-continuity or legal escrow.
- **Searchable encryption**: implement secure inverted index using SSE primitives — but only if you accept leakage tradeoffs.
- **Watermarking/forensics**: embed robust forensic watermark in PDFs/images/videos to trace leaks.
- **DRM**: integrate with specialized DRM for video delivery (Widevine, FairPlay) for monetized media.

### 18 — Performance & cost considerations

- Chunking with 4–16 MiB chunks balances throughput and latency.
- DEK per file increases metadata, but rewrap cost on KEK rotate is small.
- Server-side previews and OCR add CPU and ephemeral instance cost; charge or tier for heavy usage.
- Using KMS unwrap per download adds latency; mitigate by caching short-lived unwrapped DEKs in-memory on ephemeral workers with strict TTLs and audit.

### 19 — Failure & recovery scenarios

- **KMS outage**: system cannot unwrap DEKs => read-only until KMS back. Provide multi-region KMS keys or fallback HSM with replication.
- **Storage object corruption**: manifest and chunk hashes detect; repair from backup.
- **Compromised server**: with KMS-only KEK, attackers can’t decrypt unless they also compromise KMS. Rotate KEK and perform forensics.

### 20 — Quick implementation checklist (practical)

1. Implement per-file envelope encryption flow (DEK generation, AEAD encrypt, wrap via KMS).
2. Implement chunked streaming AEAD for uploads & downloads using libsodium secretstream or safe AES-GCM chunk scheme.
3. Create manifest schema & Ed25519 signing of manifest.
4. Integrate KMS wrap/unwrap API and log key_version metadata.
5. Build ephemeral preview worker with tight sandbox and ephemeral KMS unwrap.
6. Implement access lease tokens and audit trail pipeline.
7. Add client-side encryption CLI/SDK for privacy-first users and BYOK option.
8. Implement rewrap tooling for KEK rotation + test extensively.
9. Add blind-index / client-index search option, with policies.
10. Run pen-tests, crypto review, and harden runtime (seccomp/AppArmor, memory zeroing).
