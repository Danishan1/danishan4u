import { MyCards } from "#widgets";
import styles from "../css/Skills.module.css";

const { CardAchievement } = MyCards;

export const ThinkingDimention = ({ content, metaInfo }) => {

  return (
    <div className={styles.contentRender}>
      <p className={styles.title}>{metaInfo.title}</p>

      <div className={styles.cards}>
        {content.map((c) => {
          return (
            <CardAchievement
              key={c.title}
              title={c.title}
              description={c.description}
              iconName={c.iconName}
              metric={c.metric}
            />
          );
        })}
      </div>
    </div>
  );
};
