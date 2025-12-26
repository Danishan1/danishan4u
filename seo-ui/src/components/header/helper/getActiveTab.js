export const getActivetab = (pathname) => {
  const _activeTab = pathname.split("/")[1];
  const activeTab = _activeTab ? `/${_activeTab}` : "/";
  return activeTab;
};
