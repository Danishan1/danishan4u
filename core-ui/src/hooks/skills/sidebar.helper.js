export const getSkillSidebar = (skills) => {
  return skills.flatMap((group) => group.list.map((skill) => skill.name));
};

// export const getSkillSidebar = (skills) => {
//   return skills.map((group) => ({
//     groupName: group.group,
//     iconName: null, // if you have icons, otherwise empty
//     skills: group.skills.map((skill) => ({
//       name: skill.name,
//       type: skill.status, // mapping status -> type
//       level: skill.version, // mapping version -> level
//     })),
//   }));
// };
