"use client";

import { useState } from "react";
import styles from "../css/BlogsContainer.module.css";
import { Sidebar } from "./Sidebar";
import { useSidebarStick } from "../helper/useSidebarStick";
import { useRouter, usePathname } from "next/navigation";
import { MyIcons, MyInputs } from "#widgets";

const {
  Icons: { linesIcon },
} = MyIcons;

const {
  Actions: { IconButton },
} = MyInputs;

export const BlogsContainer = ({ sidebar, children }) => {
  const { sidebarRef, containerRef } = useSidebarStick();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (value) => {
    const base = pathname.split("blog")[0];
    router.push(`${base}blog/${value}`);
    setMobileOpen(false); // close on select (mobile)
  };

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
      <div className={styles.mobileSidebar}>
        {mobileOpen && (
          <div className={styles.mobilePanel}>
            <Sidebar
              config={sidebar}
              onSelect={(value) => handleClick(value.slug)}
            />
          </div>
        )}

        <div className={styles.fab}>
          <IconButton
            icon={linesIcon}
            onClick={() => setMobileOpen((v) => !v)}
            size={2}
            color={"var(--color-primary"}
          />
        </div>
      </div>

      <section className={styles.content}>{children}</section>
    </div>
  );
};
