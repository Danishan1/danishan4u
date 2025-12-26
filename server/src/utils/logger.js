import { UtilsLogger } from "#packages";

const { fileLogger } = UtilsLogger;

export const logger = {
  info: (message) => fileLogger.info({ message: message }),
  warn: (message) => fileLogger.warn({ message: message }),
  verbose: (message) => fileLogger.verbose({ message: message }),
  debug: (message) => fileLogger.debug({ message: message }),
  silly: (message) => fileLogger.silly({ message: message }),
  error: (message) => fileLogger.error({ message: message }),
};

export const loggerDetails = fileLogger;
