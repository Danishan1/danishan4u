import { writeQuery } from "./writeQuery.js";

export const db_insert = async (table, data, conn = null) => {
  const keys = Object.keys(data);

  const placeholders = keys.map(() => "?").join(", ");

  const sql = `INSERT INTO ${table} (${keys.join(
    ", "
  )}) VALUES (${placeholders})`;

  const values = Object.values(data);
  return await writeQuery(sql, values, conn);
};
