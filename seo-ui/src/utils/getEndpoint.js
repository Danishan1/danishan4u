export const getEndpoint = (...route) => {
  return `http://localhost:5008/${route.join("/")}`;
};
