import mysql from "mysql2/promise";
import { dbConfig } from "../migration/config.js";
import { logger } from "#utils";
import { UtilsError } from "#packages";
import { exitWithError } from "../migration/exit.js";

export async function seedDatabase() {
  const connection = await mysql.createConnection(dbConfig);
  try {
    await connection.beginTransaction();
    console.log("");
    logger.info("Seeding letWrite Data Started...");

    /*

    Seeding Files

    */

    logger.info("Seeding letWrite completed successfully.");

    await connection.commit();
  } catch (err) {
    UtilsError.handleError(err, {
      context: {
        message: `Seeding letWrite failed`,
      },
      code: "00000",
      isTrusted: false,
    });
    await connection.rollback();
    exitWithError(logger);
  }
}
