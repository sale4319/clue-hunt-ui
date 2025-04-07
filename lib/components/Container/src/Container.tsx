import { GalaxyBackground } from "@clue-hunt-ui/galaxy-background";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export const Container = ({ children, darkMode }: ContainerProps) => {
  const mode = darkMode ? styles.dark : styles.light;
  return (
    <div className={[styles.container, mode].join(" ")}>
      <GalaxyBackground darkMode={darkMode} />
      <article className={[styles.container, mode].join(" ")}>
        <section className={[styles.sectionContainer, mode].join(" ")}>
          {children}
        </section>
      </article>
    </div>
  );
};
