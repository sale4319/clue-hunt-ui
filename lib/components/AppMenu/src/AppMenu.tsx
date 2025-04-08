'use client"';

import { DarkModeButton } from "@clue-hunt-ui/dark-mode-button";
import messages from "./messages.json";
import styles from "./AppMenu.module.css";

type AppMenuProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const AppMenu = ({ darkMode, toggleDarkMode }: AppMenuProps) => {
  const mode = darkMode ? styles.dark : styles.light;
  return (
    <nav className={styles.menu}>
      <input
        type="checkbox"
        className={styles.menuOpen}
        name="menu-open"
        id="menu-open"
      />
      <label
        className={[styles.menuOpenButton, mode].join(" ")}
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
      <div className={styles.menuItem}>
        <DarkModeButton toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};
