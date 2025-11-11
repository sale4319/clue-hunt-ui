# DarkModeButton

A simple dark mode toggle button for switching between light and dark themes.

## Features

- 🌓 Theme switching functionality
- 🎨 CSS-styled toggle button
- 🖱️ Simple click interface
- 📱 Client-side component

## Props

| Prop             | Type         | Description                                             |
| ---------------- | ------------ | ------------------------------------------------------- |
| `toggleDarkMode` | `() => void` | **Required** - Function to call when toggling dark mode |

## Usage

### Basic Dark Mode Toggle

```tsx
import { DarkModeButton } from "clue-hunt-ui";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode logic here
    document.body.classList.toggle("dark-mode");
  };

  return <DarkModeButton toggleDarkMode={toggleDarkMode} />;
}
```

### With Theme Context

```tsx
import { DarkModeButton } from "clue-hunt-ui";
import { useTheme } from "./ThemeContext";

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header>
      <h1>My App</h1>
      <DarkModeButton toggleDarkMode={toggleTheme} />
    </header>
  );
}
```

### With Local Storage Persistence

```tsx
import { DarkModeButton } from "clue-hunt-ui";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return <DarkModeButton toggleDarkMode={toggleDarkMode} />;
}
```

## Styling Notes

- The button uses CSS styling defined in `DarkModeButton.css`
- Has an id of "darkMode" for custom styling
- Recommended to style based on current theme state
