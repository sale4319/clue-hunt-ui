import messages from "./messages.json";
import styles from "./PageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <section className={styles.pageNotFoundContainer}>
      <div className={styles.pageError}>{messages.FOUR_O_FOUR}</div>
      <span className={styles.pageInfo}>{messages.PAGE_NOT_FOUND}</span>
    </section>
  );
};
