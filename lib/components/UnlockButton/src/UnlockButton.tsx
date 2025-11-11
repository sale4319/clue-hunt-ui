import styles from "./UnlockButton.module.css";

interface UnlockButtonProps {
  label?: string;
  onClick?: () => void;
}

export const UnlockButton = ({
  label = "Unlock button",
  ...props
}: UnlockButtonProps) => {
  return (
    <button type="button" className={styles.unlockButton} {...props}>
      {label}
    </button>
  );
};
