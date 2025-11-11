# SpacerElement

A layout component for adding consistent spacing between elements with optional content.

## Features

- 📏 Three size options (small, medium, large)
- 📦 Can contain child elements
- 🎨 Consistent spacing system
- 📱 Responsive design

## Props

| Prop       | Type                             | Default    | Description                                   |
| ---------- | -------------------------------- | ---------- | --------------------------------------------- |
| `children` | `React.ReactNode`                | -          | Optional content to display within the spacer |
| `size`     | `"small" \| "medium" \| "large"` | `"medium"` | Size of the spacer element                    |

## Usage

### Basic Spacer

```tsx
import { SpacerElement } from "clue-hunt-ui";

<div>
  <h1>Title</h1>
  <SpacerElement />
  <p>Content with medium spacing above</p>
</div>;
```

### Different Sizes

```tsx
<div>
  <h1>Section 1</h1>
  <SpacerElement size="small" />
  <h2>Subsection</h2>

  <SpacerElement size="large" />

  <h1>Section 2</h1>
  <SpacerElement size="medium" />
  <p>Regular content</p>
</div>
```

### Spacer with Content

```tsx
<div>
  <h1>Before</h1>

  <SpacerElement size="large">
    <div style={{ textAlign: "center", opacity: 0.7 }}>
      <p>• • •</p>
    </div>
  </SpacerElement>

  <h1>After</h1>
</div>
```

### In Component Layout

```tsx
import { SpacerElement, Title, Button } from "clue-hunt-ui";

function GameInterface() {
  return (
    <div>
      <Title label="Game Title" titleSize="xl" />

      <SpacerElement size="medium" />

      <div className="game-content">{/* Game content here */}</div>

      <SpacerElement size="large" />

      <Button label="Continue" mode="pulse" />
    </div>
  );
}
```

### Responsive Spacing

```tsx
// Use different spacers for better mobile experience
<div>
  <h1>Mobile-Friendly Layout</h1>

  {/* Smaller spacing on mobile */}
  <SpacerElement size="small" />

  <div className="content-block">
    <p>Content that needs breathing room</p>
  </div>

  <SpacerElement size="medium" />

  <button>Action Button</button>
</div>
```

## Styling Notes

- Small: Minimal spacing for tight layouts
- Medium: Standard spacing for most use cases
- Large: Generous spacing for section breaks
- Acts as a semantic `<section>` element
- Responsive spacing adapts to screen size
