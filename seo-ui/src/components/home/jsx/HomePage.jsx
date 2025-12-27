import Image from "next/image";
import styles from "../css/HomePage.module.css";
import { IconSection } from "./Icon.jsx";

export function HomePage({ imageSrc = "/danishan0.png" }) {
  return (
    <div className={styles.aboutD1}>
      <Image
        src={imageSrc}
        alt="Danishan"
        width={450}
        height={450}
        className={styles.aboutImg}
        priority
      />

      <IconSection />
    </div>
  );
}
