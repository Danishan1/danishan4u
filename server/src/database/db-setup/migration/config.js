import { UtilsError } from "#packages";
import dotenv from "dotenv";

dotenv.config();

const { throwCatchError } = UtilsError;

const {
  DB_WRITE_HOST,
  DB_WRITE_USER,
  DB_WRITE_PASSWORD,
  DB_NAME,
  SCHEMA_MODE,
} = process.env;

export const dbConfig = {
  host: DB_WRITE_HOST,
  user: DB_WRITE_USER,
  password: DB_WRITE_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
};

export const validateEnv = (exitFun) => {
  if (
    !DB_WRITE_HOST ||
    !DB_WRITE_USER ||
    !DB_WRITE_PASSWORD ||
    !DB_NAME ||
    !SCHEMA_MODE
  ) {
    throwCatchError({
      message: "Database configuration is missing. Check your .env.",
      code: "00012",
      willExit: false,
    });
    exitFun();
  }

  if (!["fresh", "recreate"].includes(SCHEMA_MODE)) {
    throwCatchError({
      message: "SCHEMA_MODE must be either 'fresh' or 'recreate'.",
      code: "00013",
      willExit: false,
    });
    exitFun();
  }
};

export const schemaMode = SCHEMA_MODE;
