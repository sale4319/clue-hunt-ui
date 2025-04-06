import { GalaxyBackground } from "@clue-hunt-ui/galaxy-background";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <GalaxyBackground />
      <article>
        <section className={styles.sectionContainer}>{children}</section>
      </article>
    </div>
  );
};
