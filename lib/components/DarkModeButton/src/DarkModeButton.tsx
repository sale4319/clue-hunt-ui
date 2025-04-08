"use client";

import "./DarkModeButton.css";

type DarkModeButtonProps = {
  toggleDarkMode: () => void;
};

export const DarkModeButton = ({ toggleDarkMode }: DarkModeButtonProps) => {
  return <button id={"darkMode"} onClick={toggleDarkMode} />;
};
