import styles from "./SkipButton.module.css";

interface SkipButtonProps {
  label?: string;
  onClick?: () => void;
}

export const SkipButton = ({ label = "skip", ...props }: SkipButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.skipPosition, styles.skipButton].join(" ")}
      {...props}
    >
      <i className={styles.skipButton} />
    </button>
  );
};
