"use client";

// components/Header/NavItem.jsx
import Link from "next/link";
import styles from "../css/NavItem.module.css";
import { MyIcons } from "#widgets";
import { getActivetab } from "../helper/getActiveTab";

const {
  Icons: { arrowDownIcon },
} = MyIcons;

export function NavItem({
  item,
  pathname,
  openDropdown,
  onToggleDropdown,
  onCloseMobile,
  isMobile,
  username,
}) {
  const hasChildren = item.children && item.children.length > 0;
  const isDropdownOpen = openDropdown === item.label;
  const activeTab = getActivetab(pathname);

  const isActive = (route) => {
    if (!route) return false;
    return activeTab === route;
  };

  const hasActiveChild = (children) => {
    if (!children) return false;
    return children.some((child) => activeTab === child.route);
  };

  const getNavLink = (link) =>
    link === "/resume" ? link : `/${username}/${link}`;

  const getLinkTagret = (link) => (link === "/resume" ? "_blank" : "self");

  const itemIsActive = isActive(item.route) || hasActiveChild(item.children);

  if (hasChildren) {
    return (
      <li
        className={`${styles.navItem} ${styles.hasDropdown} ${itemIsActive ? styles.active : ""}`}
      >
        <button
          className={styles.dropdownToggle}
          onClick={() => onToggleDropdown(item.label)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {item.label}
          <span
            className={`${styles.arrow} ${isDropdownOpen ? styles.arrowOpen : ""}`}
          >
            {arrowDownIcon}
          </span>
        </button>

        {/* Mobile dropdown */}
        {isMobile && (
          <ul
            className={`${styles.mobileDropdown} ${isDropdownOpen ? styles.mobileDropdownOpen : ""}`}
          >
            {item.children.map((child) => (
              <li
                key={child.label}
                className={styles.mobileDropdownItem}
                onClick={onCloseMobile}
              >
                <Link
                  href={getNavLink(child.route)}
                  className={isActive(child.route) ? styles.activeLink : ""}
                  target={getLinkTagret(child.route)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li
      className={`${styles.navItem} ${itemIsActive ? styles.active : ""}`}
      onClick={onCloseMobile}
    >
      <Link
        href={getNavLink(item.route)}
        className={isActive(item.route) ? styles.activeLink : ""}
        target={getLinkTagret(item.route)}
      >
        {item.label}
      </Link>
    </li>
  );
}
