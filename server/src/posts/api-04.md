# Building a Modern Node.js Backend with All Types of APIs

In today’s fast-paced digital world, modern applications often need multiple API types working together. A single system may serve traditional REST endpoints, offer GraphQL flexibility, handle real-time communication through WebSockets, support microservice communication via gRPC, process WebHooks for event-driven integrations, and even manage peer-to-peer media with WebRTC.

In this guide, we’ll walk you through a **full Node.js backend architecture** that integrates **all major API types** in a unified and scalable structure.

## Why You Need Multiple API Types

Different APIs solve different problems:

- **REST**: Standard CRUD operations and public APIs.
- **GraphQL**: Dynamic queries, avoiding over-fetching or under-fetching.
- **WebSocket**: Real-time updates like chat apps, live dashboards, or notifications.
- **gRPC**: High-performance microservices communication.
- **WebHooks**: Event-driven triggers for external systems.
- **WebRTC**: Peer-to-peer audio/video and low-latency data streaming.

Rather than choosing one, **modern systems often combine multiple API types** to deliver the best performance, flexibility, and real-time experience.

## 1. Common Core Setup (Shared Across All APIs)

Before implementing individual APIs, we start with a **shared foundation** that every API type can use. This includes:

- **ES6 module structure**
- **Environment configuration**
- **MySQL2 database connection**
- **Custom validation middleware**
- **Centralized logging**
- **Error handling**
- **Health check endpoints**
- **Core services and utilities**
- **Shared folder structure**

### **Folder Structure**

```md
Diagram 

project-root/
│
├─ src/
│   ├─ config/             # DB, environment configs
│   │   ├─ db.js
│   │   └─ index.js
│   ├─ middlewares/        # Logging, validation, error handling
│   ├─ utils/              # Helpers
│   ├─ services/           # Business logic
│   ├─ core/               # Server engine, shutdown, healthcheck
│   ├─ apis/               # API-specific folders
│   │   ├─ rest/
│   │   ├─ graphql/
│   │   ├─ websocket/
│   │   ├─ grpc/
│   │   ├─ webhooks/
│   │   └─ webrtc/
│   └─ app.js              # Base Express app
│
├─ logs/
├─ package.json
└─ server.js
```

This structure ensures **modularity**, where each API type is isolated but still reuses shared core services.

### Common Express App Initialization (`src/app.js`)

```javascript
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

app.use(errorHandler);

export default app;
```

This provides a **baseline Express app** where REST and GraphQL APIs can be mounted, with **shared middleware** applied to all requests.

### Shared Database Connection (`src/config/db.js`)

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

> All API types—REST, GraphQL, gRPC, WebHooks—share this **single database pool**, reducing connection overhead and simplifying management.

### Custom Logger (`src/middlewares/logger.js`)

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

This logger can be used across **all APIs** to keep a consistent audit trail.

### Validation Middleware (`src/middlewares/validate.js`)

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

Used for **REST, GraphQL mutations, and WebHooks**, ensuring consistent input validation.

### Error Handler (`src/middlewares/errorHandler.js`)

```javascript
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}
```

Centralized error handling makes your API responses consistent and predictable.

### Unified Server Engine (`src/core/server.js`)

```javascript
import http from "http";
import app from "../app.js";

const server = http.createServer(app);

export default server;
```

This allows **WebSocket and WebRTC servers** to attach easily to the same HTTP server.

### Server Bootstrap (`server.js`)

```javascript
import dotenv from "dotenv";
dotenv.config();

import server from "./src/core/server.js";

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Unified API server running at port ${PORT}`);
});
```

## 2. REST API Implementation

REST handles **CRUD operations** and public-facing endpoints.

```javascript
import express from "express";
import { validate } from "../../middlewares/validate.js";
import { log } from "../../middlewares/logger.js";
import { pool } from "../../config/db.js";

const router = express.Router();

const userSchema = {
  name: { required: true, type: "string" },
  email: {
    required: true,
    type: "string",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
};

router.post("/users", validate(userSchema), async (req, res) => {
  try {
    const { name, email } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    log(`User created: ${name}`);
    res.json({ success: true, userId: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
```

**Mount in `src/app.js`**:

```javascript
import restRouter from "./apis/rest/index.js";
app.use("/rest", restRouter);
```

## 3. GraphQL API Implementation

GraphQL allows **flexible queries**, reducing over- and under-fetching.

### Schema (`src/apis/graphql/schema.js`)

```javascript
import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`);
```

### Resolvers (`src/apis/graphql/resolvers.js`)

```javascript
import { pool } from "../../config/db.js";
import { log } from "../../middlewares/logger.js";

export const root = {
  users: async () => {
    const [rows] = await pool.query("SELECT id, name, email FROM users");
    return rows;
  },
  createUser: async ({ name, email }) => {
    const [result] = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    log(`GraphQL user created: ${name}`);
    return { id: result.insertId, name, email };
  },
};
```

**Mount in `src/app.js`**:

```javascript
import { graphqlHTTP } from "express-graphql";
import { schema } from "./apis/graphql/schema.js";
import { root } from "./apis/graphql/resolvers.js";

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
```

## 4. WebSocket Implementation

WebSockets provide **real-time, persistent communication**.

```javascript
import { Server } from "socket.io";
import { log } from "../../middlewares/logger.js";

export function initWebSocket(server) {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    log(`Socket connected: ${socket.id}`);

    socket.on("message", (data) => {
      log(`Received message: ${data}`);
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
}
```

**Mount in `server.js`**:

```javascript
import { initWebSocket } from "./src/apis/websocket/index.js";
const io = initWebSocket(server);
```

## 5. gRPC Implementation

gRPC is perfect for **internal microservice communication**.

### Proto (`src/apis/grpc/user.proto`)

```proto
syntax = "proto3";

service UserService {
    rpc GetUsers(Empty) returns (UserList);
    rpc CreateUser(UserRequest) returns (UserResponse);
}

message Empty {}
message UserRequest { string name = 1; string email = 2; }
message UserResponse { int32 id = 1; string name = 2; string email = 3; }
message UserList { repeated UserResponse users = 1; }
```

### Server (`src/apis/grpc/index.js`)

```javascript
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { pool } from "../../config/db.js";
import { log } from "../../middlewares/logger.js";
import path from "path";

const PROTO_PATH = path.join(process.cwd(), "src/apis/grpc/user.proto");
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObj.UserService;

export const grpcServer = new grpc.Server();

grpcServer.addService(userPackage.service, {
  GetUsers: async (_, callback) => {
    const [rows] = await pool.query("SELECT id, name, email FROM users");
    callback(null, { users: rows });
  },
  CreateUser: async (call, callback) => {
    const { name, email } = call.request;
    const [result] = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    log(`gRPC user created: ${name}`);
    callback(null, { id: result.insertId, name, email });
  },
});

export function startGrpcServer() {
  grpcServer.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      grpcServer.start();
      console.log("gRPC server running on port 50051");
    }
  );
}
```

**Start in `server.js`**:

```javascript
import { startGrpcServer } from "./src/apis/grpc/index.js";
startGrpcServer();
```

## 6. WebHooks Implementation

WebHooks allow **event-driven server-to-server communication**.

```javascript
import express from "express";
import { log } from "../../middlewares/logger.js";

const router = express.Router();

router.post("/stripe", (req, res) => {
  const event = req.body;
  log(`Received Stripe event: ${event.type}`);
  res.status(200).send("Webhook received");
});

export default router;
```

**Mount in `src/app.js`**:

```javascript
import webhookRouter from "./apis/webhooks/index.js";
app.use("/webhooks", webhookRouter);
```

## 7. WebRTC Signaling Server

WebRTC handles **peer-to-peer audio/video** and data channels.

```javascript
import { Server } from "socket.io";
import { log } from "../../middlewares/logger.js";

export function initWebRTC(server) {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    log(`WebRTC signaling connected: ${socket.id}`);

    socket.on("offer", (data) => socket.broadcast.emit("offer", data));
    socket.on("answer", (data) => socket.broadcast.emit("answer", data));
    socket.on("ice-candidate", (data) =>
      socket.broadcast.emit("ice-candidate", data)
    );

    socket.on("disconnect", () => log(`Signaling disconnected: ${socket.id}`));
  });

  return io;
}
```

**Mount in `server.js`**:

```javascript
import { initWebRTC } from "./src/apis/webrtc/signaling.js";
const webrtcIo = initWebRTC(server);
```

## Final Architecture Recap

- **REST & GraphQL** → Express endpoints
- **WebSocket** → Real-time messaging & notifications
- **WebRTC** → Peer-to-peer audio/video
- **gRPC** → High-performance backend communication
- **WebHooks** → Event-driven integrations
- **Shared Core** → Logging, validation, database, error handling

This architecture is **scalable, modular, and maintainable**, and it’s used in production by companies like **Stripe, Netflix, Uber, Slack, and Discord**.

## Conclusion

Building a **modern multi-API backend** doesn’t require multiple projects. By creating a **shared core**, separating API-specific modules, and using a **unified folder structure**, you can support:

- Public APIs (REST, GraphQL)
- Real-time features (WebSocket, WebRTC)
- Event-driven integrations (WebHooks)
- High-performance microservices (gRPC)

This approach ensures **reusability, clarity, and scalability**, giving your development team a solid foundation for any type of application.
