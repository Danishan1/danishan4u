import { getHeroDetails } from "#services";
import { useEffect, useState } from "react";

export const useHeroDetails = (enkKey) => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enkKey) return;

    let isMounted = true;

    const fetchHero = async () => {
      try {
        setLoading(true);
        const data = await getHeroDetails(enkKey);
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
  }, [enkKey]);

  return { config, loading, error };
};
