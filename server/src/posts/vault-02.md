# Vault – Full Architecture Overview

Vault’s architecture has **three major planes**:

1. **Client → API Plane**
2. **Core (Control Plane)**
3. **Storage Backend (Encrypted Data Storage)**

And internally, Vault is built as a **plugin-based system** where every secret engine and auth method is modular.

# 1. High-Level Architecture Diagram (conceptual)

```
           +---------------------------+
           |       Client / App        |
           |  (CLI, SDK, Curl, etc.)   |
           +-------------+-------------+
                         |
                     HTTPS API
                         |
           +-------------v-------------+
           |        Vault Server        |
           |   (Stateless API Layer)    |
           +-------------+--------------+
                         |
           +-------------v--------------+
           |     Vault Core (Brain)     |
           | - Routing                  |
           | - Policies & ACLs          |
           | - Token system             |
           | - Lease manager            |
           | - Audit logging            |
           | - Encryption/Decryption    |
           +------+------+--------------+
                  |      |
        Auth Methods   Secret Engines
     (OIDC, AWS, K8s…)  (KV, PKI, DB…)
                  |      |
                  +------+
                         |
           +-------------v--------------+
           |  Storage Backend Driver    |
           | (Consul, Raft, DynamoDB…)  |
           +-------------+--------------+
                         |
           +-------------v--------------+
           |      Encrypted Storage     |
           +---------------------------+
```

# 2. Vault API Layer (Stateless Frontend)

- All clients interact with Vault via the **HTTP/HTTPS REST API**.
- The API layer is **stateless**:
  - No session storage
  - No local state required
  - All state is inside the “core” or the storage backend

- Multiple Vault nodes can run behind a load balancer.

This means Vault is easy to scale horizontally.

# 3. The Vault Core (Brain of Vault)

This is the **core control plane** that handles:

### 3.1. Authentication

Vault supports pluggable **auth methods**:

- Token
- OIDC / JWT
- Kubernetes Service Account
- AWS IAM / STS
- LDAP
- GitHub
- AppRole

Each auth method is a **plugin mounted at a path**, e.g.:

```
/auth/kubernetes
/auth/oidc
```

After authentication, Vault issues:

- A **client token**
- With attached **policies**
- And optional **lease / TTL**

### 3.2. Policies & ACL Engine

Policies control what a token can do.

Example (HCL):

```
path "secret/data/*" {
  capabilities = ["read", "list"]
}
```

Vault evaluates:

- Policy permissions
- Token capabilities
- Request path

All policy decisions happen in the Core.

### 3.3. Secret Engines

Everything under a path like `/kv`, `/pki`, `/database`, `/transit` is a **secret engine plugin**.

Examples:

- **KV** (versioned key-value secrets)
- **Transit** (encryption as a service)
- **PKI** (issue TLS certs)
- **Database** (dynamic DB credentials)
- **Cloud IAM engines** (AWS/GCP/Azure)
- **SSH certs**

Each engine has:

- Its own plugin
- Its own “mount path”
- Its own data model
- Uses the **core** for storage & encryption

### 3.4. Lease Manager

- Every secret with TTL has a **lease** entry
- Lease manager handles:
  - Renew
  - Revoke
  - Expire
  - Cleanup (e.g., drop DB user after TTL)

Workflows like **dynamic secrets** depend on this.

### 3.5. Audit Logging

Vault supports multiple **append-only audit logs**:

- File
- Syslog
- Socket
- JSON

Vault logs:

- Timestamp
- Token ID (hashed)
- Path
- Operation (read/write/etc)
- Caller identity
- RequestID

Audit logs cannot be disabled without root privileges.

### 3.6. Crypto Module

Vault does **not** store encrypted user data raw.
Vault encrypts/decrypts data using:

- **Master key** → unseal key shares (Shamir)
- **Barrier encryption key** → internal AES-GCM key used to encrypt data in storage

Vault never stores plaintext in the backend.

# 4. Storage Backend Architecture

Storage is **pluggable**. Popular backends:

| Backend                       | Production? | Notes                  |
| ----------------------------- | ----------- | ---------------------- |
| **Integrated Storage (Raft)** | Yes         | Default & recommended  |
| **Consul**                    | Yes         | Previously recommended |
| DynamoDB                      | Yes         | For AWS users          |
| PostgreSQL                    | Limited     | Less common            |
| Filesystem                    | No          | Only for dev           |

Vault stores:

- Encrypted “entries”
- Metadata
- Tokens
- Leases
- Policies

The backend **never sees plaintext**, only ciphertext.

# 5. Seal / Unseal Mechanism

Vault starts in **sealed** mode.

To unseal:

- Operator enters multiple unseal keys (Shamir secret-sharing)
- OR Vault uses **Auto-unseal** using:
  - AWS KMS
  - GCP KMS
  - Azure Key Vault
  - HSM

After unseal:

- The **master key** unencrypts the “barrier key”
- Barrier key decrypts all storage data

# 6. Vault Clustering Architecture

Vault clusters run in **active/standby mode**:

### 6.1. Leader (Active Node)

- Handles all writes
- Handles leases
- Heartbeat to other nodes

### 6.2. Standby Nodes

- Replicate barrier state
- Can serve reads for some engines
- Immediately become leader if active dies

Clustering requires:

- Consistent storage backend
  OR
- Raft’s built-in consensus

# 7. Replication (Enterprise Feature)

Vault Enterprise adds:

### 7.1. Performance Replication

- Read-only replicas
- Reduce load on primary
- Global distribution

### 7.2. Disaster Recovery Replication

- Standby clusters
- Failover capability

Open-source Vault **does not include replication**.

# 8. Plugin Architecture

Vault allows external plugins for:

- Secret engines
- Auth methods
- Audit devices

Each plugin runs in a **separate process**, signed & verified.

# 9. Data Flow Example (Reading a Secret)

### Step-by-step

1. Client authenticates (e.g., Kubernetes)
2. Vault returns **token** with policies
3. Client calls:

   ```
   GET /v1/secret/data/myapp
   ```

4. API forwards request to Core
5. Core checks policies
6. Core forwards to KV engine
7. KV engine reads **encrypted value** from storage
8. Core decrypts value
9. Core returns decrypted secret to client

At _no point_ does the backend see plaintext.

# 10. What makes Vault secure?

- Encryption-at-rest via barrier key
- Authentication + policy-based authorization
- Short-lived tokens
- Dynamic secrets → reduce blast radius
- Audit logs of every operation
- Externalized encryption logic
- Strict plugin sandboxing
- mTLS between nodes
- No plaintext ever leaves the core
