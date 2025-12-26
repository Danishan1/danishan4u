import React, { useState } from "react";
import styles from "../css/Sidebar.module.css";
import { SidebarSearch } from "./SidebarSearch.jsx";
import { SidebarTree } from "./SidebarTree.jsx";

export const Sidebar = ({ config, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState({
    0: false,
    1: true,
    2: true,
    "0-0": false,
    "0-1": true,
  });

  return (
    <div className={styles.sidebar}>
      <SidebarSearch
        config={config}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setExpanded={setExpanded}
        onSelect={onSelect}
      />
      <div className={styles.sidebarContent}>
        <SidebarTree
          nodes={config}
          searchTerm={searchTerm}
          expanded={expanded}
          setExpanded={setExpanded}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};
