import styles from "./Title.module.css";

interface TitleProps {
  label: string;
  color?: string;
  titleSize?: "small" | "medium" | "large";
}

export const Title = ({
  color,
  label = "Your title goes here",
  titleSize = "medium",
  ...props
}: TitleProps) => {
  const darkMode = false;
  const mode = darkMode ? styles.dark : styles.light;
  return (
    <header
      className={["title", styles[titleSize], mode].join(" ")}
      style={{ color }}
      {...props}
    >
      {label}
    </header>
  );
};
