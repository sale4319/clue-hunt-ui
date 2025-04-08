import styles from "./SkipButton.module.css";

interface SkipButtonProps {
  label?: string;
  onClick?: () => void;
}

export const SkipButton = ({ label = "skip", ...props }: SkipButtonProps) => {
  const darkMode = false;
  const mode = darkMode ? styles.dark : styles.light;
  return (
    <button
      type="button"
      className={[styles.skipPosition, styles.skipButton, mode].join(" ")}
      {...props}
    >
      <i className={styles.skipButton} />
    </button>
  );
};
