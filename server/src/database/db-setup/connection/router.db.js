import { DB_QUERY_MODE } from "../helper/enums.helper.js";
import { writeDb, readDb } from "./connection.db.js";

let forceWriteMode = false;

export const dbRouter = {
  getConnection: (type = DB_QUERY_MODE.READ) => {
    if (forceWriteMode || type === DB_QUERY_MODE.WRITE) {
      return writeDb;
    }
    return readDb;
  },

  forceWriteMode: (flag = true) => {
    forceWriteMode = flag;
  },
};
