import { SkipIcon } from "../../assets/SkipIcon";
import styles from "./SkipButton.module.css";

interface SkipButtonProps {
  onClick?: () => void;
  theme?: string;
}

export const SkipButton = ({ theme = "dark", ...props }: SkipButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.skipButton, styles[theme]].join(" ")}
      {...props}
    >
      <SkipIcon />
    </button>
  );
};
