import styles from "./Title.module.css";

interface TitleProps {
  children?: any;
  label?: string;
  color?: string;
  titleSize?: "xs" | "small" | "medium" | "large" | "xl";
  theme?: "light" | "dark";
  align?: "left" | "center" | "right";
  animated?: boolean;
  gradient?: boolean;
  className?: string;
  id?: string;
}

export const Title = ({
  children,
  color,
  label = "Your title goes here",
  titleSize = "medium",
  theme = "dark",
  align = "left",
  animated = false,
  gradient = false,
  className = "",
  id,
  ...props
}: TitleProps) => {
  const combinedClassName = [
    styles.title,
    styles[titleSize] || styles.medium,
    styles[theme] || styles.dark,
    styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`] ||
      styles.alignLeft,
    animated ? styles.animated : "",
    gradient ? styles.gradient : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = children || label;

  return (
    <h1 id={id} className={combinedClassName} style={{ color }} {...props}>
      {content}
    </h1>
  );
};
