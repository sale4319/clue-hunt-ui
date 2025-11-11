# AppMenu

A responsive hamburger menu component with smooth animations and theme support.

## Features

- 🍔 Animated hamburger menu icon
- 📱 Mobile-first responsive design
- 🌓 Light and dark theme support
- ✨ Smooth slide-in animations
- 🎯 Accessible checkbox-based toggle

## Props

| Prop       | Type                | Default      | Description                   |
| ---------- | ------------------- | ------------ | ----------------------------- |
| `children` | `React.ReactNode`   | **Required** | Menu content/navigation items |
| `theme`    | `"light" \| "dark"` | `"dark"`     | Color theme for the menu      |

## Usage

### Basic App Menu

```tsx
import { AppMenu } from "clue-hunt-ui";

<AppMenu>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</AppMenu>;
```

### Light Theme Menu

```tsx
<AppMenu theme="light">
  <nav>
    <ul>
      <li>
        <a href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/settings">Settings</a>
      </li>
    </ul>
  </nav>
</AppMenu>
```

### Menu with Buttons

```tsx
import { AppMenu, Button } from "clue-hunt-ui";

<AppMenu theme="dark">
  <Button label="New Game" mode="fill" />
  <Button label="Continue" mode="pulse" />
  <Button label="Settings" mode="raise" />
  <Button label="Exit" mode="close" />
</AppMenu>;
```

### Complex Navigation Menu

```tsx
<AppMenu theme="dark">
  <div className="menu-section">
    <h3>Game</h3>
    <a href="/new-game">New Game</a>
    <a href="/load-game">Load Game</a>
    <a href="/save-game">Save Game</a>
  </div>
  <div className="menu-section">
    <h3>Options</h3>
    <a href="/settings">Settings</a>
    <a href="/controls">Controls</a>
  </div>
</AppMenu>
```

## Styling Notes

- Uses a checkbox-based toggle mechanism for accessibility
- Hamburger icon animates to an X when opened
- Menu slides in from the side with smooth animation
- Dark theme uses light text on dark background
- Light theme uses dark text on light background
- Fully responsive and works on all screen sizes
