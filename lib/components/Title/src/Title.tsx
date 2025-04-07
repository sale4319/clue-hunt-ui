import styles from "./Title.module.css";

interface TitleProps {
  label: string;
  color?: string;
  titleSize?: "small" | "medium" | "large";
  theme?: boolean;
}

export const Title = ({
  color,
  label = "Your title goes here",
  titleSize = "medium",
  theme,
  ...props
}: TitleProps) => {
  const mode = theme ? styles.dark : styles.light;
  return (
    <header
      className={[styles.title, styles[titleSize], mode].join(" ")}
      style={{ color }}
      {...props}
    >
      {label}
    </header>
  );
};
