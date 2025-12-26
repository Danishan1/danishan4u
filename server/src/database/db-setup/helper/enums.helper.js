const getArrFromObj = (obj) => {
  return Object.values(obj);
};

export const __sql_get_enum = (obj) => {
  return getArrFromObj(obj)
    .map((g) => `'${g}'`)
    .join(", ");
};


export const DB_QUERY_MODE = {
  READ: "read",
  WRITE: "write",
};
