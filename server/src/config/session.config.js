import session from "express-session";
import dotenv from "dotenv";
import MySQLStore from "express-mysql-session";
import { DB_QUERY_MODE } from "../database/index.js";
import { dbRouter } from "../database/db-setup/connection/router.db.js";

dotenv.config();
const connection = dbRouter.getConnection(DB_QUERY_MODE.WRITE);

// Initialize MySQL session store
const MySQLSessionStore = MySQLStore(session);

// Create an instance of the session store
const sessionStore = new MySQLSessionStore({}, connection);

// Configure the session middleware
export const sessionConfig = () =>
  session({
    key: process.env.SESSION_COOKIE_NAME || "Session Cookie",
    secret: process.env.SESSION_SECRET || "Hey_@@_This_@@_Is_@@_Secret_@@_Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: process.env.NODE_ENV === "production", // Secure cookie if in production
      httpOnly: true, // Prevent client-side JavaScript access
    },
    store: sessionStore, // Use the MySQL session store
  });
