import {
  readDb as readDB,
  writeDb as writeDB,
} from "./db-setup/connection/connection.db.js";
import { dbRouter } from "./db-setup/connection/router.db.js";

import { __dbQueries } from "./utils/index.js";
import { readQuery } from "./utils/readQuery.js";
import { writeQuery } from "./utils/writeQuery.js";

export { DB_QUERY_MODE } from "./db-setup/helper/enums.helper.js";

export { schema } from "./db-setup/helper/schema.helper.js";
export { __tables as tables } from "./db-setup/schema/index.js";

export const dbQuery = {
  readDB,
  writeDB,
  router: dbRouter,
  ...__dbQueries,
  readQuery,
  writeQuery,
};
