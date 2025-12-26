import { readQuery } from "./readQuery.js";

export const db_get = async (table, where = {}, fields = "*", conn = null) => {
  const cols = Array.isArray(fields) ? fields.join(", ") : fields;

  const cond = Object.keys(where)
    .map((k) => `${k} = ?`)
    .join(" AND ");

  const sql = cond
    ? `SELECT ${cols} FROM ${table} WHERE ${cond}`
    : `SELECT ${cols} FROM ${table}`;

  const values = Object.values(where);
  return await readQuery(sql, values, conn);
};
