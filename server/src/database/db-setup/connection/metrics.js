import { writeDb, readDb } from "./connection.db.js";
import client from "prom-client";

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); // default Node.js metrics

const dbMetrics = {
  writeConnections: new client.Gauge({
    name: "db_write_active_connections",
    help: "Number of active write DB connections",
  }),
  readConnections: new client.Gauge({
    name: "db_read_active_connections",
    help: "Number of active read DB connections",
  }),
  replicaLag: new client.Gauge({
    name: "db_replica_lag_seconds",
    help: "Replication lag in seconds from master",
  }),
};

export const updateDbMetrics = async () => {
  try {
    dbMetrics.writeConnections.set(writeDb._allConnections.length);
    dbMetrics.readConnections.set(readDb._allConnections.length);
  } catch (err) {
    console.error("Metrics update failed", err);
  }
};

export const exposeMetrics = (app) => {
  app.get("/metrics", async (req, res) => {
    await updateDbMetrics();
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  });
};

export const updateReplicaLag = async (lag) => {
  if (lag !== null) dbMetrics.replicaLag.set(lag);
};
