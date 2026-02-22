import styles from "../css/CardTextSliding.module.css";

export const CardTextSliding = ({
  title,
  description,
  image,
  actions = [],
}) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      {/* Overlay */}
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.content}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.actions}>
            {actions.map((action, index) => (
              <button
                key={index}
                className={styles.button}
                onClick={() => window.open(action.href, "_blank")}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
