"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "../css/Header.module.css";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";
import { Dropdown } from "./Dropdown";
import { getNavItems } from "core-ui";
import { useDynamicContent } from "#layouts";
import { MyHooks } from "#widgets";

const menuItems = getNavItems();
const { useOutsideClick } = MyHooks;

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const { getValue } = useDynamicContent();

  const user = getValue("userInfo");
  const username = user?.username;

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useOutsideClick(headerRef, () => {
    closeDropdown();
  });

  if (!user) return null;

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <Logo onLogoClick={closeMobileMenu} />

            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            <ul
              className={`${styles.navList} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}
            >
              {menuItems.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  openDropdown={openDropdown}
                  onToggleDropdown={toggleDropdown}
                  onCloseMobile={closeMobileMenu}
                  isMobile={isMobileMenuOpen}
                  username={username}
                />
              ))}
            </ul>
          </div>
        </nav>
        {/* Full-width dropdown overlay for desktop */}
        {openDropdown && !isMobileMenuOpen && (
          <Dropdown
            items={
              menuItems.find((item) => item.label === openDropdown)?.children ||
              []
            }
            pathname={pathname}
            onClose={closeDropdown}
            onItemClick={closeDropdown}
            username={username}
          />
        )}
      </header>
    </>
  );
}
