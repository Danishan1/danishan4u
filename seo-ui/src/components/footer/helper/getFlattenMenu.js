export const getFlattenMenu = (items) => {
  return items.flatMap((item) => {
    const current = item.route
      ? [{ label: item.label, route: item.route }]
      : [];

    const children = item.children ? getFlattenMenu(item.children) : [];

    return [...current, ...children];
  });
};
