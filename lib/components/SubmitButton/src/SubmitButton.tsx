import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
  submit?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  className?: string;
}

export const SubmitButton = ({
  submit = false,
  size = "medium",
  backgroundColor,
  label,
  type = "submit",
  className,
  ...props
}: SubmitButtonProps) => {
  const mode = submit ? styles.buttonSubmitDefault : styles.glowOnHover;
  return (
    <button
      type={type}
      className={[styles.buttonSubmit, className, styles[size], mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
