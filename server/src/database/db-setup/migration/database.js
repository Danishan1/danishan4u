import mysql from "mysql2/promise";

export async function createConnection(config) {
  return await mysql.createConnection(config);
}
