import styles from "../css/HeroB.module.css";

export const HeroB = ({ config }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          {config.badge && <span className={styles.badge}>{config.badge}</span>}

          <h1 className={styles.title}>
            <span className={styles.block}>{config.title.line1}</span>
            <span className={styles.block}>{config.title.line2}</span>
            <span className={styles.highlight}>{config.title.highlight}</span>
          </h1>

          <p className={styles.description}>{config.description}</p>

          <div className={styles.actions}>
            {config.actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={
                  action.type === "primary"
                    ? styles.primaryBtn
                    : styles.secondaryBtn
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </header>

        <aside className={styles.sidebar}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>{config.visualCard.title}</h3>

            <div className={styles.metrics}>
              {config.visualCard.points.map((point, index) => (
                <div key={index} className={styles.metric}>
                  <span className={styles.dot} />
                  <span className={styles.metricText}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
