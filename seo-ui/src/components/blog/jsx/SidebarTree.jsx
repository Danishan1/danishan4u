import React from "react";
import { SidebarNode } from "./SidebarNode.jsx";

export const SidebarTree = ({
  nodes,
  searchTerm,
  expanded,
  setExpanded,
  onSelect,
  parentPath = "",
}) => {
  // Recursive search filter
  const filterTree = (nodes, query) => {
    return nodes
      .map((node) => {
        const matched = node.title.toLowerCase().includes(query.toLowerCase());
        const children = node.children ? filterTree(node.children, query) : [];
        if (matched || children.length > 0) {
          return { ...node, children };
        }
        return null;
      })
      .filter(Boolean);
  };

  const filteredNodes = searchTerm ? filterTree(nodes, searchTerm) : nodes;

  return (
    <>
      {filteredNodes.map((node, index) => {
        const path = parentPath ? `${parentPath}-${index}` : `${index}`;
        return (
          <SidebarNode
            key={path}
            node={node}
            path={path}
            expanded={expanded}
            setExpanded={setExpanded}
            onSelect={onSelect}
          />
        );
      })}
    </>
  );
};
