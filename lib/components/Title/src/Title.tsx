import styles from "./Title.module.css";

interface TitleProps {
  label: string;
  color?: string;
  titleSize?: "small" | "medium" | "large";
  theme?: "light" | "dark";
}

export const Title = ({
  color,
  label = "Your title goes here",
  titleSize = "medium",
  theme = "dark",
  ...props
}: TitleProps) => {
  return (
    <header
      className={[styles.title, styles[titleSize], styles[theme]].join(" ")}
      style={{ color }}
      {...props}
    >
      {label}
    </header>
  );
};
