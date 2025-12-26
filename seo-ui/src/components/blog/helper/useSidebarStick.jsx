import { useEffect } from "react";
import { useRef } from "react";

export const useSidebarStick = () => {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sidebarEl = sidebarRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sidebarEl.style.position = "sticky";
          sidebarEl.style.top = "20px";
        } else {
          sidebarEl.style.position = "relative";
          sidebarEl.style.top = "auto";
        }
      },
      { root: null, threshold: [0, 1] }
    );

    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return { sidebarRef, containerRef };
};
