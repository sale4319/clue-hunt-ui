# GalaxyBackground

An animated galaxy background component with starfield effects and theme support.

## Features

- 🌌 Animated starfield with multiple layers
- 🌓 Light and dark theme variations
- ✨ CSS-based star animations
- 🎨 Gradient galaxy background
- 📱 Responsive design

## Props

| Prop    | Type                             | Description                                              |
| ------- | -------------------------------- | -------------------------------------------------------- |
| `theme` | `"light" \| "dark" \| undefined` | **Required** - Theme variation for the galaxy background |

## Usage

### Dark Galaxy Background

```tsx
import { GalaxyBackground } from "clue-hunt-ui";

<GalaxyBackground theme="dark" />;
```

### Light Galaxy Background

```tsx
<GalaxyBackground theme="light" />
```

### As Background for Content

```tsx
import { GalaxyBackground, Title, Button } from "clue-hunt-ui";

function SpaceScene() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <GalaxyBackground theme="dark" />

      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
        <Title label="Welcome to the Galaxy" titleSize="xl" gradient={true} />
        <Button label="Explore Stars" mode="pulse" />
      </div>
    </div>
  );
}
```

### With Theme Switching

```tsx
import { GalaxyBackground, DarkModeButton } from "clue-hunt-ui";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div>
      <GalaxyBackground theme={isDark ? "dark" : "light"} />
      <DarkModeButton toggleDarkMode={() => setIsDark(!isDark)} />
    </div>
  );
}
```

## Styling Notes

- The background is positioned absolutely to fill the container
- Contains multiple animated star layers for depth effect
- Dark theme shows bright stars on dark background
- Light theme shows subtle stars on lighter background
- Works best as a background element with content overlaid
