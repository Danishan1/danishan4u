import React, { useEffect, useState } from "react";
import styles from "../css/Sidebar.module.css";

export const SidebarSearch = ({
  config,
  searchTerm,
  setSearchTerm,
  setExpanded,
  onSelect,
}) => {
  const [suggestions, setSuggestions] = useState([]);

  // Flatten tree for search suggestions with path array for expansion
  const flattenTree = (nodes, parentPath = []) => {
    let result = [];
    nodes.forEach((node, index) => {
      const currentPath = [...parentPath, index];
      result.push({ title: node.title, path: currentPath, node });
      if (node.children) {
        result = result.concat(flattenTree(node.children, currentPath));
      }
    });
    return result;
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    const flat = flattenTree(config);
    const matches = flat.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(matches);
  }, [searchTerm, config]);

  const handleSelectSuggestion = (item) => {
    // Expand all parent nodes of the selected suggestion
    const newExpanded = {};
    for (let i = 0; i < item.path.length; i++) {
      const key = item.path.slice(0, i + 1).join("-");
      newExpanded[key] = true;
    }

    setExpanded((prev) => ({ ...prev, ...newExpanded }));
    setSearchTerm("");
    setSuggestions([]);
    if (onSelect) onSelect(item.node);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search blogs..."
        className={styles.search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((item, idx) => (
            <div
              key={idx}
              className={styles.suggestionItem}
              onClick={() => handleSelectSuggestion(item)}
            >
              {item.path.map((i, idx2) =>
                idx2 < item.path.length - 1 ? "" : ""
              )}
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
