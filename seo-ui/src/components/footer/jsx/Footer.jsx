"use client";

import { getNavItems } from "core-ui";
import { useDynamicContent } from "#layouts";
import { usePathname } from "next/navigation";
import styles from "../css/footer.module.css";

import { getActivetab } from "../../header/helper/getActiveTab.js";
import { getFlattenMenu } from "../helper/getFlattenMenu.js";
import Link from "next/link";

const menuItems = getNavItems();

export function Footer() {
  const { getValue } = useDynamicContent();
  const user = getValue("userInfo");

  const pathname = usePathname();
  const activeTab = getActivetab(pathname);

  const flatMenu = getFlattenMenu(menuItems);

  if (!user) return null;

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.userInfo}>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.username}>~{user.username}</p>
          <p className={styles.bio}>{user.bio}</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.itemList}>
          {flatMenu.map((item, indx) => (
            <Link
              key={indx}
              href={`/${user.username}${item.route}`}
              className={`${styles.link} ${item.route === activeTab ? styles.color : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
