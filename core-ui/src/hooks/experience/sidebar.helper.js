export const getExperienceSidebar = (experience) => {
  return experience.flatMap((ex) => {
    return ex.list.map((e) => `${e.period} - ${e.role}`);
  });
};

// export const getExperienceSidebar = (experience) => {
//   return experience.flatMap((ex) => {
//     const gName = ex.group.split(" ")[0];
//     return ex.list.map((e) => `${gName} - ${e.role}`);
//   });
// };
