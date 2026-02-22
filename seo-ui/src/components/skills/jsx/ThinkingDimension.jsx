import styles from "../css/ThinkingDimensions.module.css";
import { COLOR } from "../helper/colors";

export const ThinkingDimensions = ({ data = [] }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Thinking Dimensions</h2>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3
              className={styles.title}
              style={{ color: COLOR[(index + 1) % COLOR.length] }}
            >
              {item.title}
            </h3>

            <span className={styles.metric}>{item.metric}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
