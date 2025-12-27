"use client";

import { useState } from "react";
import styles from "../css/BlogsContainer.module.css";
import { Sidebar } from "./Sidebar";
import { useSidebarStick } from "../helper/useSidebarStick";
import { useRouter, usePathname } from "next/navigation";
import { MyHooks, MyInputs } from "#widgets";
import { useRef } from "react";

const {
  Actions: { Button },
} = MyInputs;

const { useOutsideClick } = MyHooks;

export const BlogsContainer = ({ sidebar, children }) => {
  const { sidebarRef, containerRef } = useSidebarStick();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const blogRef = useRef();

  const handleClick = (value) => {
    const base = pathname.split("blog")[0];
    router.push(`${base}blog/${value}`);
    setMobileOpen(false); // close on select (mobile)
  };

  useOutsideClick(blogRef, () => {
    setMobileOpen(false);
  });

  return (
    <div ref={containerRef} className={styles.contentRender}>
      {/* Desktop sidebar */}
      <section className={styles.side}>
        <div ref={sidebarRef} className={styles.sidebarWrapper}>
          <Sidebar
            config={sidebar}
            onSelect={(value) => handleClick(value.slug)}
          />
        </div>
      </section>

      {/* Mobile floating sidebar */}
      <div className={styles.mobileSidebar} ref={blogRef}>
        {mobileOpen && (
          <div className={styles.mobilePanel}>
            <Sidebar
              config={sidebar}
              onSelect={(value) => handleClick(value.slug)}
            />
          </div>
        )}

        <div className={styles.fab}>
          <Button
            text={"More Blogs"}
            onClick={() => setMobileOpen((v) => !v)}
            color={"var(--color-primary)"}
            borderRadius={"var(--border-radius-sm)"}
          />
        </div>
      </div>

      <section className={styles.content}>{children}</section>
    </div>
  );
};
