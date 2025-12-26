"use client";

import Link from "next/link";
import styles from "../css/Logo.module.css";
import { useDynamicContent } from "#layouts";

export function Logo({ onLogoClick }) {
  const { getValue } = useDynamicContent();
  const user = getValue("userInfo");

  if (!user) return <>No user</>;

  return (
    <div className={styles.logo}>
      <Link href={`/${user.username}`} onClick={onLogoClick}>
        {user?.name}
      </Link>
    </div>
  );
}
