# MySQL2: Fast, Reliable MySQL Client for Node.js

Node.js developers often need **relational database support** for structured data. While MongoDB is popular for NoSQL, **MySQL** is still a staple for transactional systems, analytics, and applications requiring ACID compliance.

**MySQL2** is a modern, **fast, and promise-based** Node.js client for MySQL, improving upon the older `mysql` library. It supports **Promises**, **prepared statements**, **connection pooling**, and works seamlessly with **Express.js**, **Nest.js**, or other Node.js frameworks.

## 1. What is MySQL2?

MySQL2 is:

- A Node.js driver for MySQL databases
- Fully **Promise-based**, supporting async/await
- Compatible with MySQL 5.x and 8.x
- Provides **prepared statements** for security and performance
- Supports **pooling** for efficient connections
- Works with **TypeScript**

It’s widely used in **production-grade applications** where speed and security matter.

## 2. Installing MySQL2

Install via npm:

```bash
npm install mysql2
```

Or with Yarn:

```bash
yarn add mysql2
```

## 3. Connecting to MySQL

### Basic Connection

```javascript
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mydb",
});

console.log(" Connected to MySQL!");
```

**Notes:**

- `mysql2/promise` allows using **async/await** instead of callbacks
- Use **environment variables** for credentials

## 4. Executing Queries

### Simple Query

```javascript
const [rows, fields] = await connection.execute("SELECT * FROM users");
console.log(rows);
```

### Parameterized Query (Prepared Statement)

```javascript
const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [
  "john@example.com",
]);
console.log(rows);
```

**Why use prepared statements?**

- Protects against **SQL injection**
- Optimized by MySQL server for repeated queries

## 5. Connection Pooling

Opening a new MySQL connection for every request is expensive. Use **connection pools**:

```javascript
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Usage
const [rows] = await pool.execute("SELECT * FROM users");
```

**Advantages of pooling:**

- Reuses connections efficiently
- Handles concurrent queries
- Reduces overhead of creating/destroying connections

## 6. Transactions

Transactions are critical for **atomic operations**:

```javascript
const connection = await pool.getConnection();

try {
  await connection.beginTransaction();

  await connection.execute(
    "UPDATE accounts SET balance = balance - ? WHERE id = ?",
    [100, 1]
  );
  await connection.execute(
    "UPDATE accounts SET balance = balance + ? WHERE id = ?",
    [100, 2]
  );

  await connection.commit();
  console.log(" Transaction committed");
} catch (err) {
  await connection.rollback();
  console.error("No Transaction rolled back", err);
} finally {
  connection.release();
}
```

**Tips:**

- Always release the connection back to the pool
- Wrap queries in `try/catch`

## 7. Integrating with Express.js

MySQL2 integrates smoothly with **Express**:

```javascript
import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    await pool.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## 8. Advanced Usage

### Multiple Statements

```javascript
const [results] = await pool.execute(`
  SELECT COUNT(*) AS userCount FROM users;
  SELECT COUNT(*) AS postCount FROM posts;
`);
```

- Enable `multipleStatements: true` in pool if needed
- Useful for dashboards or reporting

### Streaming Queries

For large datasets:

```javascript
const connection = await pool.getConnection();
const query = connection.query("SELECT * FROM users");
query.stream().pipe(process.stdout);
```

## 9. Best Practices

1. **Use pooled connections** for production.
2. **Always use prepared statements** to prevent SQL injection.
3. **Use async/await** to write clean asynchronous code.
4. **Handle errors properly**; wrap queries in `try/catch`.
5. **Use transactions** for multi-step operations.
6. **Keep queries simple and optimized**; use indexes in MySQL.
7. **Limit the number of results** to avoid memory overflow.

## 10. Why MySQL2 Over mysql?

| Feature                 | mysql   | mysql2                  |
| ----------------------- | ------- | ----------------------- |
| Promise Support         | No      | Yes                     |
| Prepared Statements     | Limited | Yes                     |
| Performance             | Good    | Better (faster parsing) |
| Pooling                 | Yes     | Yes                     |
| Streaming Large Queries | Limited | Yes                     |
| MySQL 8 Support         | Partial | Yes                     |

## 11. Summary

MySQL2 is a **fast, modern, and reliable** Node.js MySQL client. It’s ideal for:

- **CRUD operations**
- **Transaction-heavy applications**
- **Express.js or Nest.js integration**
- **Promise-based clean coding**

With **prepared statements, pooling, and streaming**, MySQL2 makes working with MySQL in Node.js **secure, efficient, and scalable**.
