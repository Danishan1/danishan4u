import { writeDb } from "../db-setup/connection/connection.db.js";

export const writeQuery = async (sql, values = [], conn = null) => {
  const executor = conn || writeDb;
  const [rows] = await executor.execute(sql, values);
  return rows;
};
