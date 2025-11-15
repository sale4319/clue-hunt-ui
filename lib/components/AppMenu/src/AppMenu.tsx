"use client";

import { GithubIcon } from "../../assets/GithubIcon";
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
        className={[styles.menuItem, styles[theme]].join(" ")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className={styles[theme]} />
      </a>
      <div className={[styles.menuItem, styles[theme]].join(" ")}>
        {children}
      </div>
    </nav>
  );
};
