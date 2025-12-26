# Building a Unified API Server for All API Types in JS

Creating multiple API types in a single project can be challenging. The **key is a shared core setup**, allowing REST, GraphQL, WebSockets, gRPC, WebHooks, and WebRTC to coexist cleanly.

This guide outlines **a common foundation** and shows how to structure your project for maintainability and scalability.

## **1. Common Core Setup (Shared by All API Types)**

Every API type shares these foundational components:

- ES6 module structure
- Environment configuration
- MySQL2 database connection pool
- Custom validation middleware
- Custom logging
- Centralized error handling
- App initialization (Express base)
- Common utilities & services
- Shared folder structure

## **2. Recommended Folder Structure**

```
project-root/
│
├─ src/
│   ├─ config/              # Shared config
│   │   ├─ db.js
│   │   └─ index.js
│   ├─ middlewares/         # Shared middleware
│   │   ├─ logger.js
│   │   ├─ validate.js
│   │   └─ errorHandler.js
│   ├─ utils/               # Helpers & utilities
│   ├─ services/            # Core business logic
│   ├─ core/                # Core modules for all APIs
│   │   ├─ server.js        # Unified server engine
│   │   ├─ shutdown.js      # Graceful shutdown
│   │   └─ healthcheck.js   # Health endpoint
│   ├─ apis/                # API-specific modules
│   │   ├─ rest/
│   │   ├─ graphql/
│   │   ├─ websocket/
│   │   ├─ grpc/
│   │   ├─ webhooks/
│   │   └─ webrtc/
│   └─ app.js               # Base Express app
│
├─ logs/
├─ package.json
└─ server.js
```

**Key point:** Each API type is isolated but can reuse the shared core components.

## **3. Base Express App (Shared Across APIs)**

### **src/app.js**

```javascript
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

// Centralized error handler
app.use(errorHandler);

export default app;
```

> REST and GraphQL mount here; WebSockets, gRPC, and WebRTC will extend the server engine.

## **4. Shared Database Connection (MySQL2)**

### **src/config/db.js**

```javascript
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});
```

> The same pool is shared across REST, GraphQL, gRPC, WebHooks, and WebRTC.

## **5. Logging Utility (Shared)**

### **src/middlewares/logger.js**

```javascript
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFile = path.join(__dirname, "../../logs/app.log");

export function log(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, entry);
  console.log(entry);
}
```

> Used by all API types for consistent logging.

## **6. Custom Validation Middleware**

### **src/middlewares/validate.js**

```javascript
export function validate(schema) {
  return (req, res, next) => {
    const errors = [];

    for (const field in schema) {
      const rule = schema[field];
      const value = req.body[field];

      if (rule.required && !value) errors.push(`${field} is required`);
      if (rule.type && typeof value !== rule.type)
        errors.push(`${field} must be a ${rule.type}`);
      if (rule.pattern && !rule.pattern.test(value))
        errors.push(`${field} is invalid`);
    }

    if (errors.length > 0)
      return res.status(400).json({ success: false, errors });

    next();
  };
}
```

> Works with REST, GraphQL, and WebHooks.

## **7. Centralized Error Handler**

### **src/middlewares/errorHandler.js**

```javascript
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}
```

## **8. Unified Server Engine**

### **src/core/server.js**

```javascript
import http from "http";
import app from "../app.js";

const server = http.createServer(app);

export default server;
```

> WebSockets, gRPC, and WebRTC will attach to this HTTP server.

## **9. Bootstrap Server**

### **server.js**

```javascript
import dotenv from "dotenv";
dotenv.config();

import server from "./src/core/server.js";

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Unified API server running on port ${PORT}`);
});
```

## **Foundation is Complete**

You now have:

- Express core ready for REST and GraphQL
- Shared MySQL2 pool
- Centralized logging & validation
- Unified error handling
- Health checks
- Clean folder structure

## **Next Steps: Layered API Modules**

1. **REST API** → `/src/apis/rest/`
2. **GraphQL API** → `/src/apis/graphql/`
3. **WebSocket API** → `/src/apis/websocket/`
4. **gRPC API** → `/src/apis/grpc/`
5. **Webhook API** → `/src/apis/webhooks/`
6. **WebRTC Signaling** → `/src/apis/webrtc/`

> Each module **reuses the shared core** and **adds only API-specific logic**, keeping the architecture clean and scalable.
