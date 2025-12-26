## 1. What is HashiCorp Vault?

- **HashiCorp Vault** is a **centralized secrets management tool**.
- It’s designed to **securely store, manage, and control access** to secrets, such as:
  - API keys
  - Database credentials
  - Encryption keys
  - Certificates

- Provides **dynamic secrets**, meaning secrets can be generated on-demand and automatically expire.

## 2. Key Features

| Feature                     | Description                                              | Benefit for You                                       |
| --------------------------- | -------------------------------------------------------- | ----------------------------------------------------- |
| **Secret Storage**          | Secure storage of key-value secrets                      | No secrets stored in Git or plaintext files           |
| **Dynamic Secrets**         | Generates credentials on demand (e.g., DB user/password) | Automatically rotated and reduces risk if leaked      |
| **Encryption as a Service** | Vault can encrypt/decrypt data without storing it        | Secure sensitive data in apps                         |
| **Access Control**          | Fine-grained policies, tokens, and roles                 | Only authorized apps/users can access certain secrets |
| **Audit Logging**           | Tracks who accessed or changed secrets                   | Security compliance and accountability                |
| **Secret Versioning**       | Keep track of secret versions                            | Rollback or rotate secrets safely                     |

## 3. Vault Architecture (Simplified)

- **Vault Server:** Central service that stores secrets.
- **Clients:** Your applications or deployment scripts query Vault to get secrets.
- **Authentication Backends:** Methods like GitHub, AppRole, Kubernetes, or tokens to authenticate clients.
- **Secrets Engines:** Define how secrets are generated or stored (key-value, database, PKI, etc.).

## 4. How Vault Works (Example Workflow)

1. **Vault Setup**
   - Start Vault in server mode (can be HA or single node).
   - Initialize and unseal it.

2. **Define Secrets**
   - Static secrets (key-value):

     ```
     vault kv put secret/productA/db USERNAME='dbuser' PASSWORD='dbpass'
     ```

   - Dynamic secrets (e.g., database):

     ```
     vault write database/creds/my-db-role
     ```

     - Vault generates a **temporary DB user/password**.

3. **Authenticate Clients**
   - Apps can use **AppRole, tokens, or cloud IAM** to authenticate.

4. **Access Secrets**
   - Example in Node.js:

     ```javascript
     const vault = require("node-vault")({
       endpoint: "http://127.0.0.1:8200",
       token: process.env.VAULT_TOKEN,
     });
     const secret = await vault.read("secret/productA/db");
     console.log(secret.data);
     ```

5. **Rotation & Revocation**
   - Secrets can **expire automatically** and Vault can revoke them.
   - Ensures minimal risk if secrets are leaked.

## 5. Benefits of Vault for Your Scenario

| Use Case                | How Vault Helps                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| Multi-product monorepos | Centralized storage for secrets per product, no need to manage secrets in multiple `.env` files |
| Sub-apps per product    | Fine-grained access control, so desktop-ui, web-ui, mobile-ui can have separate secret policies |
| Redeployment            | Deployment scripts or CI/CD pipelines can fetch secrets on demand, no manual copying            |
| Security                | Secrets are never stored in Git; dynamic secrets minimize risk                                  |
| Environment consistency | Same secret values in all environments (or dynamic per env)                                     |

## 6. How to Integrate Vault into CI/CD / Deployment Workflow

1. **Store secrets in Vault**
   - Static: API keys, endpoints
   - Dynamic: DB credentials, tokens

2. **Authenticate pipeline or deployment script**
   - Example: GitHub Actions uses Vault token stored as GitHub secret

3. **Fetch secrets during build/deploy**

   ```bash
   export DB_CREDENTIALS=$(vault kv get -format=json secret/productA/db | jq -r '.data.data.PASSWORD')
   ```

4. **Inject into sub-apps**
   - Build or runtime scripts read secrets and populate environment variables.

5. **Optional:** Rotate secrets automatically without downtime.

### 7. Recommended Approach for Your Scenario

- **Central Vault instance** for all products.
- **Secrets per product** stored under `/secret/<product-name>/`.
- **Policies per sub-app**:
  - `desktop-ui` gets only secrets it needs.
  - `web-ui` gets only its relevant secrets.

- CI/CD pipelines fetch secrets from Vault at build or deploy time.
- Local dev can use Vault dev server or `.env` fallback.
