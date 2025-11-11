# MobileWarning

A component that displays a warning message for mobile users, typically used to inform about limited mobile functionality.

## Features

- 📱 Mobile-specific messaging
- 🌓 Light and dark theme support
- 💬 Customizable warning message
- 🎨 Styled warning container

## Props

This component currently has no props and uses internal configuration.

## Usage

### Basic Mobile Warning

```tsx
import { MobileWarning } from "clue-hunt-ui";

// Display warning for mobile users
<MobileWarning />;
```

### Conditional Mobile Warning

```tsx
import { MobileWarning } from "clue-hunt-ui";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      {isMobile && <MobileWarning />}

      <main>{/* Your app content */}</main>
    </div>
  );
}
```

### With User Agent Detection

```tsx
import { MobileWarning } from "clue-hunt-ui";

function App() {
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <div>
      {isMobileDevice && <MobileWarning />}

      <div className="desktop-content">{/* Desktop-optimized content */}</div>
    </div>
  );
}
```

### In Game Context

```tsx
import { MobileWarning, Container, Title } from "clue-hunt-ui";

function GameApp() {
  const [showMobileWarning, setShowMobileWarning] = useState(
    window.innerWidth <= 768
  );

  return (
    <Container theme="dark">
      {showMobileWarning ? (
        <div>
          <MobileWarning />
          <button
            onClick={() => setShowMobileWarning(false)}
            style={{ marginTop: "1rem" }}
          >
            Continue Anyway
          </button>
        </div>
      ) : (
        <div>
          <Title label="Desktop Game Experience" />
          {/* Full game interface */}
        </div>
      )}
    </Container>
  );
}
```

### With Custom Layout

```tsx
import { MobileWarning, SpacerElement } from "clue-hunt-ui";

function ResponsiveLayout() {
  return (
    <div>
      {/* Show warning on smaller screens */}
      <div className="mobile-only">
        <MobileWarning />
        <SpacerElement size="medium" />
        <p>For the best experience, please use a desktop computer.</p>
      </div>

      {/* Hide on mobile */}
      <div className="desktop-only">{/* Full desktop interface */}</div>
    </div>
  );
}
```

## Styling Notes

- Displays a container with warning message
- Automatically switches between light and dark themes
- Message content is defined in `messages.json`
- Designed to be prominent and attention-grabbing
- Works best when conditionally rendered for mobile devices

## Customization

The warning message is stored in `messages.json` and can be customized by modifying the `MOBILE_VIEW` property.
