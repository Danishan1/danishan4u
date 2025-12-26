import { getExperienceMetaInfo, getExperiences } from "#services";
import { useEffect, useState } from "react";
import { getExperienceSidebar } from "./sidebar.helper.js";

export const useExperiences = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const experience = await getExperiences();
        const metaInfo = await getExperienceMetaInfo();

        const sidebar = getExperienceSidebar(experience);
        if (isMounted)
          setConfig({ experienceSet: experience, sidebar, metaInfo });
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
