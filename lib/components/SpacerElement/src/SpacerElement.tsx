import styles from "./SpacerElement.module.css";

interface SpacerElementProps {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const SpacerElement = ({
  children,
  size = "medium",
}: SpacerElementProps) => {
  return (
    <section className={[styles.placeholderContainer, styles[size]].join(" ")}>
      {children}
    </section>
  );
};
