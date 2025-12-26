import { writeQuery } from "./writeQuery.js";

export const db_update = async (table, updates, where, conn = null) => {
  const set = Object.keys(updates)
    .map((k) => `${k} = ?`)
    .join(", ");

  const cond = Object.keys(where)
    .map((k) => `${k} = ?`)
    .join(" AND ");

  const sql = `UPDATE ${table} SET ${set} WHERE ${cond}`;
  const values = [...Object.values(updates), ...Object.values(where)];
  
  return await writeQuery(sql, values, conn);
};
