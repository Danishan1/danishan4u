import mysql from "mysql2/promise";
import { config } from "dotenv";
import { UtilsError } from "#packages";
import { DB_QUERY_MODE } from "../helper/enums.helper.js";
import { logger } from "#utils";
const { AppError, handleError, HttpCode, throwCatchError } = UtilsError;

config();

const {
  DB_WRITE_HOST,
  DB_WRITE_USER,
  DB_WRITE_PASSWORD,
  DB_READ_HOST,
  DB_READ_USER,
  DB_READ_PASSWORD,
  DB_NAME,
} = process.env;

// Validate environment variables
if (
  !DB_WRITE_HOST ||
  !DB_WRITE_USER ||
  !DB_WRITE_PASSWORD ||
  !DB_READ_HOST ||
  !DB_READ_USER ||
  !DB_READ_PASSWORD ||
  !DB_NAME
) {
  throwCatchError({
    message: "Must define all the environment variables for DB connection",
    code: "0000C",
  });
}
const commonSettings = {
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
  ssl: { rejectUnauthorized: false },
};

const poolWrite = mysql.createPool({
  ...commonSettings,
  host: DB_WRITE_HOST,
  user: DB_WRITE_USER,
  password: DB_WRITE_PASSWORD,
});

const poolRead = mysql.createPool({
  ...commonSettings,
  host: DB_READ_HOST,
  user: DB_READ_USER,
  password: DB_READ_PASSWORD,
});

// Test connections
async function testConnection(pool, label) {
  try {
    const connection = await pool.getConnection();
    logger.info(`Connected to ${label} database successfully!`);
    connection.release();
  } catch (err) {
    handleError(err, { code: "0000D", isTrusted: false });
  }
}

testConnection(poolWrite, DB_QUERY_MODE.WRITE);
testConnection(poolRead, DB_QUERY_MODE.READ);

export const readDb = poolRead;
export const writeDb = poolWrite;
