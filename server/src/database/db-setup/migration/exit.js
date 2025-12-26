import { logger as importLogger } from "#utils";

export const exitWithError = (logger) => {
  const myLogger = logger || importLogger;
  myLogger.warn("------ Exiting process due to error :( ------");
  process.exit(1);
};
