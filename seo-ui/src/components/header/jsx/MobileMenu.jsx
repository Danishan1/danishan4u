// components/Header/MobileMenu.jsx
import styles from "../css/MobileMenu.module.css";

export function MobileMenu({ isOpen, onToggle }) {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
