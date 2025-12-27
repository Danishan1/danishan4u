import styles from "../css/AboutPage.module.css";

export const AboutSection = ({ title, paragraphs, list }) => {
  return (
    <div className={styles.section}>
      {title && <h3 className={styles.section_title}>{title}</h3>}
      {paragraphs && paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      {list && (
        <ul className={styles.list}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
