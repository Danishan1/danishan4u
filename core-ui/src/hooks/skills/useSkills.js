import { getSkills, getSkillsMetaInfo, getThinkingDimensions } from "#services";
import { useEffect, useState } from "react";
import { getSkillSidebar } from "./sidebar.helper.js";

export const useSkills = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const skills = await getSkills();
        const thinkingDimension = await getThinkingDimensions();
        const metaInfo = await getSkillsMetaInfo();

        const sidebar = getSkillSidebar(skills);
        if (isMounted)
          setConfig({ skillset: skills, thinkingDimension, sidebar, metaInfo });
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
