import { saveSqlToFile } from "../helper/sql-writer.helper.js";
import { schemaExecution } from "../schema/schema-execution.js";

export async function createSchema({ mode, connection, logger }) {
  const entries = Object.entries(schemaExecution);
  if (mode === "recreate") {
    await connection.query(
      `DROP DATABASE IF EXISTS \`${process.env.DB_NAME}\`;`
    );

    logger.info({
      message: `Dropped database ${process.env.DB_NAME}`,
      code: "00015",
    });

    await connection.query(`CREATE DATABASE \`${process.env.DB_NAME}\`;`);
    logger.info({
      message: `Created database ${process.env.DB_NAME}`,
      code: "00016",
    });

    await connection.query(`USE \`${process.env.DB_NAME}\`;`);
  }

  for (let i = 0; i < entries.length; i++) {
    const [_, { folder, name, table }] = entries[i];
    saveSqlToFile(name, table, folder);

    await connection.query(table);

    logger.info({ message: `Created table: ${name}`, code: "00017" });
  }
}
