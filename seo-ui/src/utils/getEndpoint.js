export const getEndpoint = (...route) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${route.join("/")}`;
};
