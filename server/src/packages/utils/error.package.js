import {
  AppError,
  asyncErrorHandler,
  BadRequestError,
  commonErrors,
  errorHandler,
  HttpCode,
  InternalServerError,
  NotFoundError,
} from "@itsrighttime/utils";
import { UtilsLogger } from "./logger.package.js";
const { getTrackingCode, codeTypes, loggerMessageFormater } = UtilsLogger;

const handleError = (
  error,
  options = { code: "NA-LOGGER", context: null, isTrusted: true, foldeName: "" }
) => {
  let formattedError = error;

  if (!options.isTrusted)
    formattedError.message = loggerMessageFormater({
      message: error.message,
      code: getTrackingCode(codeTypes.error, options.code),
      context: options.context,
    });
  errorHandler.handleError(formattedError);
};

const throwCatchError = ({
  message,
  code,
  willExit = true,
  errorName = "Validation Error",
}) => {
  try {
    throw new AppError({
      name: errorName,
      httpCode: HttpCode.NOT_FOUND,
      description: message || "Default Message for Error",
      errorCode: getTrackingCode(codeTypes.error, code),
    });
  } catch (err) {
    handleError(err);
    if (willExit) process.exit(1); // Stop the app if env is invalid
  }
};

export const UtilsError = {
  AppError,
  BadRequestError,
  NotFoundError,
  InternalServerError,
  handleError,
  asyncErrorHandler,
  commonErrors,
  HttpCode,
  throwCatchError,
  errorHandler
};

/*

 handleError(err, { code: "0000D", isTrusted: false }); 

 handleError(err, {
   context: {
     message: `Error creating table "${name}": ${err.message}`,
   },
   code: "00018",
   isTrusted: false,
 });

*/
