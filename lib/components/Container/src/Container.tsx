import { GalaxyBackground } from "@clue-hunt-ui/galaxy-background";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export const Container = ({ children, darkMode }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <GalaxyBackground darkMode={darkMode} />
      <article>
        <section className={styles.sectionContainer}>{children}</section>
      </article>
    </div>
  );
};
