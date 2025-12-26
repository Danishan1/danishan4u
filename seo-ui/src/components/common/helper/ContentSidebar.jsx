import { useState } from "react";
import styles from "../css/ContentSidebar.module.css";

export const ContentSidebar = ({ sidebar }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <aside className={styles.contentSidebar}>
      {sidebar.map((bar, indx) => {
        const isHovered = hoveredIndex === indx;
        const isSelected = selectedIndex === indx;

        return (
          <div key={indx} className={styles.barContainer}>
            <div
              className={styles.groupInfo}
              onMouseEnter={() => setHoveredIndex(indx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setSelectedIndex(indx === selectedIndex ? null : indx)
              }
            >
              <span className={styles.bar}></span>
              {isHovered && <p className={styles.groupName}>{bar.groupName}</p>}
            </div>

            {/* Skills appear floating on the side */}
            {isSelected && (
              <div className={styles.skillsOverlay}>
                {bar.skills.map((sk, i) => (
                  <div key={i} className={styles.skillsItem}>
                    <p className={styles.skillName}>{sk.name}</p>
                    <p className={styles.skillType}>{sk.type}</p>
                    <p className={styles.skillLevel}>{sk.level}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
};
