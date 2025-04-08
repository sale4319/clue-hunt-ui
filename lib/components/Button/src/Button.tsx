'use client"';

import styles from "./styles.module.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  isLocked?: boolean;
  size?: "small" | "medium" | "large";
  mode?: "fill" | "pulse" | "close" | "raise" | "up" | "slide" | "offset";
  label?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  primary,
  size = "medium",
  mode = "fill",
  isLocked,
  backgroundColor,
  label,
  href,
  ...props
}: ButtonProps) {
  const toggleColor = primary
    ? styles.fill
    : primary === undefined
    ? styles[mode]
    : styles.pulse;

  const buttonStyles = [styles.primaryButton, styles[size], toggleColor].join(
    " "
  );

  return isLocked ? (
    <div
      className={buttonStyles}
      style={{ backgroundColor, cursor: "not-allowed" }}
      {...props}
    >
      Locked
    </div>
  ) : (
    <a
      href={href}
      className={buttonStyles}
      style={{ backgroundColor }}
      {...props}
    >
      {label ?? "Unlocked"}
    </a>
  );
}
