# Title

A flexible and customizable title component with animations, gradients, and multiple sizing options.

## Features

- 🎨 Gradient text effects with animations
- ✨ Smooth entrance animations
- 📏 Five size options (xs, small, medium, large, xl)
- 🎯 Text alignment options
- 🌓 Light and dark themes
- 🎨 Custom color support
- 📱 Responsive design

## Props

| Prop        | Type                                             | Default                  | Description                      |
| ----------- | ------------------------------------------------ | ------------------------ | -------------------------------- |
| `label`     | `string`                                         | `"Your title goes here"` | Title text content               |
| `children`  | `ReactNode`                                      | -                        | React children (overrides label) |
| `titleSize` | `"xs" \| "small" \| "medium" \| "large" \| "xl"` | `"medium"`               | Title size                       |
| `theme`     | `"light" \| "dark"`                              | `"dark"`                 | Color theme                      |
| `align`     | `"left" \| "center" \| "right"`                  | `"left"`                 | Text alignment                   |
| `animated`  | `boolean`                                        | `false`                  | Enable entrance animation        |
| `gradient`  | `boolean`                                        | `false`                  | Enable gradient text effect      |
| `color`     | `string`                                         | -                        | Custom text color                |
| `className` | `string`                                         | -                        | Additional CSS classes           |
| `id`        | `string`                                         | -                        | HTML id attribute                |

## Usage

### Basic Title

```tsx
import { Title } from "clue-hunt-ui";

<Title label="Welcome to Clue Hunt" />;
```

### Animated Title with Gradient

```tsx
<Title
  label="Epic Adventure"
  titleSize="xl"
  animated={true}
  gradient={true}
  align="center"
/>
```

### Light Theme Title

```tsx
<Title label="Bright Title" theme="light" titleSize="large" align="center" />
```

### Custom Styled Title

```tsx
<Title
  label="Custom Title"
  color="#ff6b6b"
  titleSize="large"
  className="my-custom-class"
  id="main-title"
/>
```

### Title with React Children

```tsx
<Title titleSize="large" theme="light">
  <span>
    Custom <em>styled</em> content
  </span>
</Title>
```

### Small Animated Title

```tsx
<Title label="Subtitle" titleSize="small" animated={true} align="center" />
```
