import cors from "cors";

const allowedOrigins = [
  "http://localhost:3008",
  "http://localhost:1061",
  "http://localhost:5173",
  "http://localhost:1062",
];

export const configCors = cors({
  origin: (origin, callback) => {
    if (!origin) {
      // // Further checks for requests without origin
      // if (req.headers['user-agent'].includes('YourExpectedClient')) {
      //   return callback(null, true);
      // }

      // // Or require a valid token
      // if (req.headers['authorization'] === 'YourToken') {
      //   return callback(null, true);
      // }

      // // Deny any other cases
      // return callback(new Error("Unauthorized null origin"), false);
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
});
