import { addForeignKeys } from "../constraints/foriegn-key/add-foreign-key.sql.js";
import { saveSqlToFile } from "../helper/sql-writer.helper.js";


export async function addForeignKeysfn({ connection, logger }) {
  for (let i = 0; i < addForeignKeys.length; i++) {
    const query = addForeignKeys[i];
    saveSqlToFile(`foreign-key-${i}`, query, "forieng-key");
    await connection.query(query);
    logger.info({
      message: `FK Added: ${addForeignKeys[i].trim().split("\n")[0]}`,
      code: "00019",
    });
  }
}
