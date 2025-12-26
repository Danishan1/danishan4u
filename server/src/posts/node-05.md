# Mastering Express.js Middleware: Built-In, Third-Party, and Custom

One of the key reasons **Express.js** is so powerful is its **middleware architecture**. Middleware allows developers to **process requests and responses in a modular, reusable way**, enabling everything from logging and authentication to request parsing and error handling.

In this blog, we’ll explore:

1. What middleware is in Express.js
2. Built-in middleware
3. Most used third-party middleware and their use cases
4. How to create custom middleware

## 1. What is Middleware in Express.js?

In Express, **middleware functions are functions that have access to the request (`req`) and response (`res`) objects**, as well as a `next()` function that passes control to the next middleware in the stack.

**Key Points:**

- Middleware can **modify request/response** objects
- Can **terminate the request** or **pass control** to the next function
- Enables **clean separation of concerns**
- Can be applied **globally**, **per route**, or **conditionally**

**Basic Middleware Example:**

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass to next middleware or route handler
};

app.use(logger);
```

## 2. Built-In Middleware in Express.js

Express comes with **several essential built-in middleware functions**. These are lightweight, maintained by the Express team, and used in almost every app.

| Middleware             | Purpose / Use Case                                |
| ---------------------- | ------------------------------------------------- |
| `express.json()`       | Parse incoming JSON requests. Essential for APIs. |
| `express.urlencoded()` | Parse URL-encoded form data. Useful for forms.    |
| `express.static()`     | Serve static files like images, CSS, JS.          |
| `express.raw()`        | Parse raw request bodies. Useful for webhooks.    |
| `express.text()`       | Parse text/plain requests.                        |

**Example: Using Built-In Middleware**

```javascript
import express from "express";
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.json({ success: true, data: req.body });
});
```

**Use Cases:**

- APIs needing JSON or form data
- Serving web assets
- Webhooks requiring raw payloads

## 3. Top Third-Party Middleware

Express’s real power comes from **third-party middleware**. These are community-driven packages that extend Express functionality.

### 1. CORS

**Purpose:** Enable Cross-Origin Resource Sharing

```javascript
import cors from "cors";
app.use(cors());
```

**Use Case:**

- Allow your API to be called from web apps hosted on different domains

### 2. Helmet

**Purpose:** Security headers for HTTP responses

```javascript
import helmet from "helmet";
app.use(helmet());
```

**Use Case:**

- Protect your app from XSS, clickjacking, and other attacks

### 3. Morgan

**Purpose:** HTTP request logging

```javascript
import morgan from "morgan";
app.use(morgan("dev"));
```

**Use Case:**

- Logging all incoming requests for debugging or analytics

### 4. Compression

**Purpose:** Gzip/deflate compression for responses

```javascript
import compression from "compression";
app.use(compression());
```

**Use Case:**

- Improve network performance and reduce payload size

### 5. Express-Validator

**Purpose:** Request input validation

```javascript
import { body, validationResult } from "express-validator";

app.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User registered!");
  }
);
```

**Use Case:**

- Validate API inputs for security and consistency

### 6. Cookie-Parser

**Purpose:** Parse cookies attached to requests

```javascript
import cookieParser from "cookie-parser";
app.use(cookieParser());
```

**Use Case:**

- Authentication or session management via cookies

### 7. Rate-Limiter-Flexible / Express-Rate-Limit

**Purpose:** Limit requests per user/IP

```javascript
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests
});

app.use(limiter);
```

**Use Case:**

- Prevent brute-force attacks and API abuse

## 4. Custom Middleware

Creating your own middleware is easy and allows **business-specific logic** like logging, authentication, or error handling.

### 1. Logging Middleware

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
};
app.use(logger);
```

### 2. Authentication Middleware

```javascript
const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token || token !== "secret-token") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
app.use("/api/private", auth);
```

### 3. Error Handling Middleware

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});
```

**Use Cases for Custom Middleware:**

- Logging requests and responses
- Authentication/authorization
- Input validation beyond express-validator
- Transforming or sanitizing data
- Centralized error handling

## 5. Middleware Order Matters

In Express, **order of middleware registration is critical**:

1. Middleware declared first runs first
2. Errors should be handled at the **end of middleware stack**
3. Route-specific middleware executes only for matching routes

```javascript
app.use(logger); // global
app.post("/api", auth, handler); // route-specific
app.use(errorHandler); // last
```

## 6. Best Practices for Middleware

1. **Use only necessary middleware** to keep performance high
2. **Modularize middleware** into separate files
3. **Handle async errors** with `next(err)` or try/catch
4. **Avoid blocking operations** inside middleware
5. **Chain middleware for reusability**: e.g., `auth + validation + handler`

## 7. Conclusion

Middleware is **the backbone of Express.js architecture**, enabling:

- **Built-in parsing and static file handling**
- **Third-party integrations for security, logging, and validation**
- **Custom logic for your business needs**

Understanding and mastering middleware is essential for **building scalable, maintainable, and secure Node.js applications**.
