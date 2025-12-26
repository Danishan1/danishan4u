import { apiCaller } from "#utils";
import { useEffect, useState } from "react";

export const useBlogs = (endpoint) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await apiCaller({ endpoint });

        if (response.success) {
          setContent(response.data);
        }
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
  }, [endpoint]);

  return { content, loading, error };
};
