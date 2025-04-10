import styles from "./GalaxyBackground.module.css";

type GalaxyBackgroundProps = {
  theme: "light" | "dark" | undefined;
};

export const GalaxyBackground = ({ theme }: GalaxyBackgroundProps) => {
  const mode = theme === "dark" ? styles.layerDark : styles.layerLight;
  return (
    <div>
      <div
        className={[
          styles.bg,
          theme === "dark" ? styles.bgDark : styles.bgLight,
        ].join(" ")}
      />
      <div className={styles.starField}>
        <div className={[styles.layer, mode].join(" ")} />
        <div className={[styles.layer, mode].join(" ")} />
        <div className={[styles.layer, mode].join(" ")} />
      </div>
    </div>
  );
};
