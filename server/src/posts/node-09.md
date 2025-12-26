# Sequelize: Powerful ORM for Node.js and SQL Databases

When working with **relational databases** like MySQL, PostgreSQL, or SQLite in Node.js, writing raw SQL queries for every operation can get tedious, error-prone, and hard to maintain. That’s where **Sequelize** comes in—a **promise-based Object-Relational Mapping (ORM) library** that abstracts SQL into **JavaScript objects** while keeping the flexibility to run raw queries when needed.

Sequelize supports **MySQL, PostgreSQL, MariaDB, SQLite, and Microsoft SQL Server**, making it a versatile choice for modern Node.js applications.

## 1. Why Sequelize?

Sequelize provides several benefits over raw SQL:

1. **Object-Oriented Database Management**: Treat tables as models and rows as objects.
2. **Promise-based**: Works with async/await for clean, non-blocking code.
3. **Database Agnostic**: Easily switch between supported databases.
4. **Data Validation & Constraints**: Enforce rules at the model level.
5. **Migrations & Seeders**: Manage database schema changes systematically.
6. **Associations & Relations**: Handle one-to-one, one-to-many, and many-to-many relationships effortlessly.
7. **Raw Queries Support**: Run custom SQL when needed.

## 2. Installing Sequelize

For MySQL, install both **sequelize** and **mysql2**:

```bash
npm install sequelize mysql2
```

Or with Yarn:

```bash
yarn add sequelize mysql2
```

Sequelize works with other databases by changing the database driver, e.g., `pg` for PostgreSQL or `sqlite3` for SQLite.

## 3. Setting Up Sequelize

### Basic Connection

```javascript
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: console.log, // optional
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
```

**Notes:**

- `dialect` specifies the database type
- `logging` can be turned off in production

## 4. Defining Models

Models represent **tables** in your database. Example:

```javascript
import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true, // createdAt, updatedAt
  }
);

export default User;
```

### Key Points:

- `DataTypes` defines column types.
- `validate` ensures input follows rules.
- `timestamps` automatically manages `createdAt` and `updatedAt`.

## 5. Creating Tables

To sync models with the database:

```javascript
await sequelize.sync({ force: false }); // force: true drops & recreates table
```

- Use `force: false` in production to prevent data loss.
- Use `alter: true` to auto-update schema without dropping tables.

## 6. CRUD Operations

### Create

```javascript
const user = await User.create({
  name: "Alice",
  email: "alice@example.com",
  age: 25,
});
console.log(user.toJSON());
```

### Read

```javascript
const users = await User.findAll(); // all users
const alice = await User.findOne({ where: { name: "Alice" } });
```

### Update

```javascript
await User.update({ age: 26 }, { where: { name: "Alice" } });
```

### Delete

```javascript
await User.destroy({ where: { name: "Alice" } });
```

## 7. Advanced Queries

### Filtering & Operators

```javascript
import { Op } from "sequelize";

const users = await User.findAll({
  where: {
    age: { [Op.gt]: 18 }, // age > 18
  },
});
```

### Ordering & Limiting

```javascript
const users = await User.findAll({
  order: [["age", "DESC"]],
  limit: 5,
});
```

## 8. Associations

Sequelize makes relationships easy.

### One-to-Many

```javascript
const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

User.hasMany(Post);
Post.belongsTo(User);

// Create a post for a user
const user = await User.findOne();
const post = await Post.create({ title: "Hello", content: "World" });
await user.addPost(post);
```

### Many-to-Many

```javascript
const Tag = sequelize.define("Tag", { name: DataTypes.STRING });

Post.belongsToMany(Tag, { through: "PostTags" });
Tag.belongsToMany(Post, { through: "PostTags" });
```

Sequelize automatically manages the **junction table** (`PostTags`).

## 9. Migrations & Seeders

For production-grade apps, Sequelize CLI helps:

```bash
npx sequelize-cli init
```

This creates:

- `models/`
- `migrations/`
- `seeders/`
- `config/`

### Running Migration

```bash
npx sequelize-cli db:migrate
```

### Seeding Data

```bash
npx sequelize-cli db:seed:all
```

## 10. Integrating with Express.js

```javascript
import express from "express";
import User from "./models/User.js";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

- Sequelize simplifies database operations in **REST APIs**
- Works with **GraphQL** as well

## 11. Benefits of Using Sequelize

1. **Clean and readable code** with models instead of raw SQL
2. **Cross-database compatibility**
3. **Built-in validations** and constraints
4. **Supports transactions and associations**
5. **Promise-based for async/await**
6. **Migrations & seeders** streamline production deployment

## 12. When Not to Use Sequelize

While Sequelize is powerful, there are cases to avoid it:

- Performance-critical apps with **complex, heavy queries**
- Extremely **large datasets**, where raw SQL or query builders (like Knex.js) may perform better
- Projects requiring **database-specific optimizations**

## 13. Summary

Sequelize is a **go-to ORM** for Node.js developers who want to:

- Manage MySQL/PostgreSQL/SQLite databases
- Build maintainable, scalable applications
- Avoid writing repetitive raw SQL
- Use models, validations, migrations, and relationships

It pairs beautifully with **Express.js, Nest.js, GraphQL**, and **TypeScript** projects, making it a **modern, production-ready ORM solution**.
