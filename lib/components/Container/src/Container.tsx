import { GalaxyBackground } from "@clue-hunt-ui/galaxy-background";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  theme: "light" | "dark" | undefined;
}

export const Container = ({ children, theme = "dark" }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <GalaxyBackground theme={theme} />
      <article>
        <section className={styles.sectionContainer}>{children}</section>
      </article>
    </div>
  );
};
