import styles from "./UnlockButton.module.css";

interface UnlockButtonProps {
  unlock?: boolean;
  label?: string;
  onClick?: () => void;
}

export const UnlockButton = ({
  unlock = false,
  label = "Unlock button",
  ...props
}: UnlockButtonProps) => {
  return (
    <button type="button" className={styles.unlockButton} {...props}>
      {label}
    </button>
  );
};
