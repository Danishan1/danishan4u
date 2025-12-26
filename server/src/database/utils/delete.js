import { writeQuery } from "./writeQuery.js";

export const db_delete = async (table, where, conn = null) => {
  const cond = Object.keys(where)
    .map((k) => `${k} = ?`)
    .join(" AND ");
  const sql = `DELETE FROM ${table} WHERE ${cond}`;
  const values = Object.values(where);
  return await writeQuery(sql, values, conn);
};
