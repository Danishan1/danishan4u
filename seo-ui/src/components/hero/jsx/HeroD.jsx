import styles from "../css/HeroD.module.css";

export const HeroD = ({ config }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.context}>{config.context}</span>

          <h1 className={styles.title}>
            {config.headline.main}
            <span className={styles.accent}>{config.headline.accent}</span>
          </h1>

          <p className={styles.narrative}>{config.narrative}</p>

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

        <div className={styles.visual}>
          <div className={styles.diagram}>
            {config.signals.map((signal, index) => (
              <div key={index} className={styles.node}>
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
