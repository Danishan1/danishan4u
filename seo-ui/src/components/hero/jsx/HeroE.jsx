import styles from "../css/HeroE.module.css";

import clsx from "clsx";

export function HeroE({ config }) {
  const isVideo = config.background?.type === "video";
  const {
    placement = "center",
    overlayOpacity = 0.6,
    tone = "auto",
  } = config.meta;
  const background = config.background;

  return (
    <section className={styles.hero}>
      {/* Background */}
      {isVideo ? (
        <video
          className={styles.background}
          src={background.src}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${background.src})` }}
        />
      )}

      {/* Overlay */}
      <div className={styles.overlay} style={{ opacity: overlayOpacity }} />

      {/* config */}
      <div className={clsx(styles.content, styles[placement], styles[tone])}>
        <span className={styles.context}>{config.context}</span>

        <h1 className={styles.title}>
          {config.headline.primary}
          <span className={styles.emphasized}>
            {config.headline.emphasized}
          </span>
        </h1>

        <p className={styles.description}>{config.description}</p>

        <div className={styles.actions}>
          {config.cta?.primary && (
            <a href={config.cta.primary.href} className={styles.primaryBtn}>
              {config.cta.primary.label}
            </a>
          )}
          {config.cta?.secondary && (
            <a href={config.cta.secondary.href} className={styles.secondaryBtn}>
              {config.cta.secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
