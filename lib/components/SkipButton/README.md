# SkipButton

A positioned skip button component with icon styling and hover effects, perfect for allowing users to skip content or steps.

## Features

- 📍 Absolute positioning (top-right corner)
- 🎨 SVG icon-based design
- ✨ Hover animation effects
- 🚫 Disabled state styling
- 🎯 Accessible button behavior

## Props

| Prop       | Type         | Default  | Description                        |
| ---------- | ------------ | -------- | ---------------------------------- |
| `label`    | `string`     | `"skip"` | Accessibility label for the button |
| `onClick`  | `() => void` | -        | Click handler function             |
| `disabled` | `boolean`    | `false`  | Whether the button is disabled     |

## Usage

### Basic Skip Button

```tsx
import { SkipButton } from "clue-hunt-ui";

<SkipButton onClick={() => console.log("Skipped!")} />;
```

### Skip Button with Custom Label

```tsx
<SkipButton
  label="Skip Tutorial"
  onClick={() => console.log("Tutorial skipped!")}
/>
```

### Disabled Skip Button

```tsx
<SkipButton
  label="Skip (Unavailable)"
  disabled={true}
  onClick={() => console.log("This won't fire")}
/>
```

### Skip Button in Game Context

```tsx
<SkipButton
  label="Skip Cutscene"
  onClick={() => {
    // Skip to next game section
    skipCutscene();
  }}
/>
```

## Styling Notes

- The button is absolutely positioned in the top-right corner
- Uses an SVG icon (skip.svg) for the visual element
- Includes scale animation on hover
- Disabled state shows reduced opacity and grayscale filter
