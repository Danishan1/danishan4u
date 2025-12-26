import { getUsernameList } from "./getUsernameList.js";

export const getUserInfo = (username) => {
  const allUsernames = getUsernameList();

  const user = allUsernames.filter((user) => user.username === username);

  return user.length > 0 ? user[0] : null;
};
