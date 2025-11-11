# Button

A versatile button component with multiple styles, sizes, and animation modes for interactive UI elements.

## Features

- 🎨 Multiple animation modes (fill, pulse, close, raise, up, slide, offset)
- 📏 Three sizes (small, medium, large)
- 🎯 Primary and secondary variants
- 🔒 Locked/disabled state
- 🔗 Link functionality
- 🎨 Customizable background color

## Props

| Prop              | Type                                                                     | Default    | Description                         |
| ----------------- | ------------------------------------------------------------------------ | ---------- | ----------------------------------- |
| `primary`         | `boolean`                                                                | `false`    | Whether button uses primary styling |
| `size`            | `"small" \| "medium" \| "large"`                                         | `"medium"` | Button size                         |
| `mode`            | `"fill" \| "pulse" \| "close" \| "raise" \| "up" \| "slide" \| "offset"` | `"fill"`   | Animation/style mode                |
| `label`           | `string`                                                                 | -          | Button text content                 |
| `isLocked`        | `boolean`                                                                | `false`    | Whether button is disabled/locked   |
| `backgroundColor` | `string`                                                                 | -          | Custom background color             |
| `href`            | `string`                                                                 | -          | URL for link behavior               |
| `onClick`         | `() => void`                                                             | -          | Click handler function              |

## Usage

### Basic Button

```tsx
import { Button } from "clue-hunt-ui";

<Button label="Click Me" onClick={() => console.log("Clicked!")} />;
```

### Primary Button with Animation

```tsx
<Button
  label="Start Adventure"
  primary={true}
  size="large"
  mode="pulse"
  onClick={() => console.log("Adventure started!")}
/>
```

### Link Button

```tsx
<Button
  label="Learn More"
  href="https://example.com"
  size="medium"
  mode="raise"
/>
```

### Locked/Disabled Button

```tsx
<Button label="Locked Feature" isLocked={true} size="large" />
```

### Custom Styled Button

```tsx
<Button
  label="Custom Style"
  backgroundColor="#ff6b6b"
  mode="slide"
  size="large"
  onClick={() => console.log("Custom button clicked!")}
/>
```

## Animation Modes

- **fill**: Standard button with fill animation
- **pulse**: Pulsing animation effect
- **close**: Closing/expanding animation
- **raise**: Button raises on hover
- **up**: Upward movement animation
- **slide**: Sliding animation effect
- **offset**: Offset positioning animation
