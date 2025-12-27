import Image from "next/image";
import styles from "../css/PortfolioHome.module.css";
import Link from "next/link";

export const PortfolioHome = () => {
  return (
    <div className={styles.homeBody}>
      <Image
        src="/danishan0.png"
        alt="Danishan Farookh"
        width={250}
        height={250}
        className={styles.img}
      />

      <div className={styles.homeIntro}>
        <p className={styles.nameTextCol}>Danishan Farookh</p>
        <p className={styles.hd3Col}>
          B-Tech (CSE) - Amity University, Uttar Pradesh
        </p>
        <p className={styles.hd2Gry}>
          Project Technical Lead
          <span className={styles.break}></span>
          (Tech Lead)
        </p>
        <p className={styles.hd1}>JKC Softwares</p>
      </div>

      <Link href="/experience">
        <div className={styles.btn}>Explore</div>
      </Link>
    </div>
  );
};
