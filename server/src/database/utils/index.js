import { db_delete } from "./delete.js";
import { db_get } from "./get.js";
import { db_insert } from "./insert.js";
import { db_update } from "./update.js";

export const __dbQueries = {
  delete: db_delete,
  get: db_get,
  insert: db_insert,
  update: db_update,
};
