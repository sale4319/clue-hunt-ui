import styles from "./SkipButton.module.css";

interface SkipButtonProps {
  onClick?: () => void;
}

export const SkipButton = ({ ...props }: SkipButtonProps) => {
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
