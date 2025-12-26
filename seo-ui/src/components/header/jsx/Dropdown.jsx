// components/Header/Dropdown.jsx
import Link from "next/link";
import styles from "../css/Dropdown.module.css";
import { getActivetab } from "../helper/getActiveTab.js";

export function Dropdown({ items, pathname, onItemClick }) {
  const isActive = (route) => {
    const activeTab = getActivetab(pathname);
    return activeTab === route;
  };

  return (
    <div className={styles.dropdownOverlay}>
      <div
        className={styles.dropdownContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.dropdownContent}>
          <ul className={styles.dropdownList}>
            {items.map((item) => (
              <li key={item.label} className={styles.dropdownItem}>
                <Link
                  href={`/${item.route}`}
                  className={`${styles.dropdownLink} ${isActive(item.route) ? styles.activeLink : ""}`}
                  onClick={onItemClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
