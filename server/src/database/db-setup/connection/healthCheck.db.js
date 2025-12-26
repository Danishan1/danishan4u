import { __REPLICA_LAG } from "../../../config/db.config.js";
import { readDb } from "./connection.db.js";

export async function checkReplicationLag() {
  try {
    const [rows] = await readDb.query("SHOW SLAVE STATUS");
    const lag = rows[0]?.Seconds_Behind_Master ?? null;

    return {
      lag,
      isHealthy: lag !== null && lag < __REPLICA_LAG, // Customize your threshold
    };
  } catch (err) {
    return {
      lag: null,
      isHealthy: false,
      error: err.message,
    };
  }
}
