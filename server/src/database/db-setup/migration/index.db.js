import mysql from "mysql2/promise";
import { UtilsLogger, UtilsError } from "#packages";
import { dbConfig, validateEnv, schemaMode } from "./config.js";
import { exitWithError } from "./exit.js";
import { createSchema } from "./schemaHandler.js";
import { addForeignKeysfn } from "./addForeignKeysHandler.js";

const logger = UtilsLogger.createFolderLogger("database", "migrate");
const { handleError } = UtilsError;

export async function createProjectSchema() {
  validateEnv(() => exitWithError(logger));

  logger.info({
    message: `Schema Creation Started in "${schemaMode}" mode`,
    code: "00014 \n",
  });
  const connection = await mysql.createConnection(dbConfig);

  try {
    await connection.beginTransaction();

    await createSchema({
      mode: schemaMode,
      connection,
      logger,
    });
    await addForeignKeysfn({ connection, logger });
    logger.info({ message: "Schema created successfully :)", code: "0001B" });

    await connection.commit();
  } catch (err) {
    handleError(err, {
      context: {
        message: "Unexpected error during schema creation",
      },
      code: "0001C",
      isTrusted: false,
    });
    await connection.rollback();
    exitWithError(logger);
  } finally {
    await connection.end();
  }
}
