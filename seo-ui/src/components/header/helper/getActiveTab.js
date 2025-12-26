export const getActivetab = (pathname) => {
  const _activeTab = pathname.split("/")[2];
  const activeTab = _activeTab ? `/${_activeTab}` : "/";
  return activeTab;
};
