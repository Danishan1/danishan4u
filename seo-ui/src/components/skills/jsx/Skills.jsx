import styles from "../css/Skills.module.css";
import { COLOR } from "../helper/colors";

export const Skills = ({ data = [] }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Core Backend Skill Set</h2>

      {data.map((group, index) => (
        <div key={index} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.group}</h3>

          <div className={styles.skillsGrid}>
            {group.list.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <span
                  className={styles.skillName}
                  style={{ color: COLOR[(i * (index + 1)) % COLOR.length] }}
                >
                  {skill.name}
                </span>
                <div className={styles.meta}>
                  <span className={styles.level}>{skill.level}</span>
                  <span className={styles.type}>{skill.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
