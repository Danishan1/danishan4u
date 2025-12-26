import { getTimelineConfig } from "#services";
import { useEffect, useState } from "react";

export const useJourneyTimeline = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchHero = async () => {
      try {
        setLoading(true);
        const data = await getTimelineConfig();
        if (isMounted) setConfig(data);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchHero();

    return () => {
      isMounted = false;
    };
  }, []);

  return { config, loading, error };
};
