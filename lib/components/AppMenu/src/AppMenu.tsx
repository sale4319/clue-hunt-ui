"use client";

import messages from "./messages.json";
import styles from "./AppMenu.module.css";

type AppMenuProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const AppMenu = ({ theme = "dark", children }: AppMenuProps) => {
  return (
    <nav className={styles.menu}>
      <input
        type="checkbox"
        className={styles.menuOpen}
        name="menu-open"
        id="menu-open"
      />
      <label
        className={[styles.menuOpenButton, styles[theme]].join(" ")}
        htmlFor="menu-open"
      >
        <span className={[styles.hamburger, styles.hamburger1].join(" ")} />
        <span className={[styles.hamburger, styles.hamburger2].join(" ")} />
        <span className={[styles.hamburger, styles.hamburger3].join(" ")} />
      </label>
      <a
        href={`${messages.GITHUB}`}
        className={styles.menuItem}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={styles.githubButton} />
      </a>
      <a
        href={`${messages.TRELLO}`}
        className={styles.menuItem}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={styles.trelloButton} />
      </a>
      <div className={styles.menuItem}>{children}</div>
    </nav>
  );
};
