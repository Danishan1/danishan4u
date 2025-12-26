export const getProjectsSidebar = (experience) => {
  return experience.flatMap((ex) => {
    return ex.list.map((e) => e.name);
  });
};
