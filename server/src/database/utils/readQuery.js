import { readDb } from "../db-setup/connection/connection.db.js";

export const readQuery = async (sql, values = [], conn = null) => {
  const executor = conn || readDb;
  const [rows] = await executor.execute(sql, values);
  return rows;
};
