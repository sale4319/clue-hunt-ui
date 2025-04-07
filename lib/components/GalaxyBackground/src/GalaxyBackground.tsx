import styles from "./GalaxyBackground.module.css";

type GalaxyBackgroundProps = {
  darkMode?: boolean;
};

export const GalaxyBackground = ({ darkMode }: GalaxyBackgroundProps) => {
  const mode = darkMode ? styles.layerDark : styles.layerLight;
  return (
    <div>
      <div
        className={[styles.bg, darkMode ? styles.bgDark : styles.bgLight].join(
          " "
        )}
      />
      <div className={styles.starField}>
        <div className={[styles.layer, mode].join(" ")} />
        <div className={[styles.layer, mode].join(" ")} />
        <div className={[styles.layer, mode].join(" ")} />
      </div>
    </div>
  );
};
