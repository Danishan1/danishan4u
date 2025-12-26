import styles from "../css/HeroC.module.css";

export const HeroC = ({ config }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>{config.eyebrow}</span>

          <h1 className={styles.title}>
            <span className={styles.primary}>{config.headline.primary}</span>
            <span className={styles.secondary}>
              {config.headline.secondary}
            </span>
          </h1>

          <p className={styles.summary}>{config.summary}</p>

          <div className={styles.actions}>
            {config.cta.primary && (
              <a href={config.cta.primary.href} className={styles.primaryBtn}>
                {config.cta.primary.label}
              </a>
            )}
            {config.cta.secondary && (
              <a
                href={config.cta.secondary.href}
                className={styles.secondaryBtn}
              >
                {config.cta.secondary.label}
              </a>
            )}
          </div>
        </div>

        <div className={styles.right}>
          {config.valueBlocks.map((block, index) => (
            <div key={index} className={styles.block}>
              <h3 className={styles.blockTitle}>{block.title}</h3>
              <p className={styles.blockDescription}>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
