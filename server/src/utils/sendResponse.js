export const sendResponse = ({
  res,
  data,
  success = true,
  status = 200,
  message = "API Responded Successfully",
  code,
  error = null,
}) => {
  res.status(status).json({
    data,
    success,
    message: error ? error?.message : message,
    code,
  });
  if (error) console.error(error);
  return true;
};
