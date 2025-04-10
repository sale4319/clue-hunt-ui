import messages from "./messages.json";
import styles from "./MobileWarning.module.css";

export const MobileWarning = () => {
  const darkMode = false;
  return (
    <div
      className={[
        styles.mobileViewContainer,
        darkMode ? styles.containerDark : styles.containerLight,
      ].join(" ")}
    >
      {messages.MOBILE_VIEW}
    </div>
  );
};
