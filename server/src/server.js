import express from "express";
import http from "http";
import "dotenv/config";
// import { sessionConfig, configCors } from "#config";
import { configCors } from "#config";

import { UtilsError } from "#packages";
import { publicRoutes, privateRoutes } from "#routes";
import { logger } from "#utils";

const PORT = process.env.PORT || 5008;

const app = express();
const server = http.createServer(app);
// const sessionMiddleware = sessionConfig();

app.disable("x-powered-by");
app.use(configCors);

// Parsing json data
app.use(express.json());

// Register for Express Session
// app.use(sessionMiddleware);

// Public API routes
app.use("/public", publicRoutes);

// Authentication middleware for private routes
// app.use();

// Private API routes
app.use("/private", privateRoutes);

// Error handling middleware
app.use(UtilsError.asyncErrorHandler);
// Running Server
server.listen(PORT, () => {
  logger.info(`danishan4u server running on port ${PORT}`);
});

export { server };
