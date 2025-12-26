import React from "react";
import styles from "../css/Sidebar.module.css";
import { SidebarTree } from "./SidebarTree.jsx";
import { MyIcons } from "#widgets";
import { usePathname } from "next/navigation";

const {
  Icons: { arrowDownIcon, arrowRightIcon },
} = MyIcons;

export const SidebarNode = ({
  node,
  path,
  expanded,
  setExpanded,
  onSelect,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const pathname = usePathname();
  const activeSlug = pathname.split("/blog/")[1];
  const isActive = node.slug === activeSlug;

  const toggleExpand = () => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const handleSelect = () => {
    if (onSelect) onSelect(node);
  };

  return (
    <div className={styles.node}>
      <div
        className={`${styles.nodeTitle} ${isActive ? styles.active : ""}`}
        onClick={hasChildren ? toggleExpand : handleSelect}
      >
        {hasChildren && (
          <span className={styles.arrow}>
            {expanded[path] ? arrowDownIcon : arrowRightIcon}
          </span>
        )}
        {node.title}
      </div>
      {hasChildren && expanded[path] && (
        <div className={styles.children}>
          <SidebarTree
            nodes={node.children}
            expanded={expanded}
            setExpanded={setExpanded}
            onSelect={onSelect}
            parentPath={path}
          />
        </div>
      )}
    </div>
  );
};
