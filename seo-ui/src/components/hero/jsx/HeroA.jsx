import styles from "../css/HeroA.module.css";

export const HeroA = ({ config }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {config.badge && <span className={styles.badge}>{config.badge}</span>}

          <h1 className={styles.title}>
            {config.title.line1}
            <br />
            {config.title.line2}
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
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <h3>{config.visualCard.title}</h3>
            <ul>
              {config.visualCard.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
