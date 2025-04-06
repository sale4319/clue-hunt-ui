import styles from "./GalaxyBackground.module.css";

export const GalaxyBackground = () => {
  const darkMode = false;
  return (
    <div>
      <div
        className={[styles.bg, darkMode ? styles.bgDark : styles.bgLight].join(
          " "
        )}
      />
      <div className={styles.starField}>
        <div
          className={[
            styles.layer,
            darkMode ? styles.layerDark : styles.layerLight,
          ].join(" ")}
        />
        <div
          className={[
            styles.layer,
            darkMode ? styles.layerDark : styles.layerLight,
          ].join(" ")}
        />
        <div
          className={[
            styles.layer,
            darkMode ? styles.layerDark : styles.layerLight,
          ].join(" ")}
        />
      </div>
    </div>
  );
};
