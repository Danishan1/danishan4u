import Redis from "ioredis";
import { UtilsError, UtilsLogger } from "../packages/index.js";

const { handleError } = UtilsError;
const { fileLogger } = UtilsLogger;

export const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
});

redis.on("error", (error) => {
  handleError(error, { code: "0000F", isTrusted: false });
});

redis.on("connect", () => {
  fileLogger.info({ message: "Connected to Redis", code: "00010" });
});
