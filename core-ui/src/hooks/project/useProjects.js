import { getProjectMetaInfo, getProjects } from "#services";
import { useEffect, useState } from "react";
import { getProjectsSidebar } from "./sidebar.helper.js";

export const useProjects = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        const metaInfo = await getProjectMetaInfo();

        const sidebar = getProjectsSidebar(projects);
        if (isMounted)
          setConfig({ projectsSet: projects, sidebar, metaInfo });
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { config, loading, error };
};
