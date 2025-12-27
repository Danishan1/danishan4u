import styles from "../css/AboutPage.module.css";
import { aboutData } from "../helper/aboutConfig.js";
import { AboutSection } from "./AboutSection.jsx";

export function AboutPage() {
  return (
    <section className={styles.intro}>
      <p className={styles.hd2}>{aboutData.meta.title}</p>
      <h1>
        <span className={styles.name_text_gry}>I'm </span>
        <span className={styles.name_text_col}>{aboutData.meta.name}</span>
      </h1>
      <p className={styles.hd1_col}>{aboutData.meta.role}</p>

      <div className={`${styles.simple_text} ${styles.biography}`}>
        {aboutData.sections.map((section, i) => (
          <AboutSection
            key={i}
            title={section.title}
            paragraphs={section.paragraphs}
            list={section.list}
          />
        ))}

        <p className={`${styles.hd4_col} ${styles.date}`}>
          — {aboutData.meta.name} · {aboutData.meta.location} ·{" "}
          {aboutData.meta.date}
        </p>
      </div>
    </section>
  );
}
