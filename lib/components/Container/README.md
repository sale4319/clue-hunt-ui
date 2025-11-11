# Container

A layout wrapper component that provides a structured container with an animated galaxy background.

## Features

- 🌌 Integrated galaxy background animation
- 🌓 Light and dark theme support
- 📦 Semantic HTML structure
- 🎨 Responsive layout container

## Props

| Prop       | Type                             | Default      | Description                                 |
| ---------- | -------------------------------- | ------------ | ------------------------------------------- |
| `children` | `React.ReactNode`                | **Required** | Content to be rendered inside the container |
| `theme`    | `"light" \| "dark" \| undefined` | `"dark"`     | Theme for the galaxy background             |

## Usage

### Basic Container

```tsx
import { Container } from "clue-hunt-ui";

<Container theme="dark">
  <h1>Welcome to the Galaxy</h1>
  <p>Your content here...</p>
</Container>;
```

### Light Theme Container

```tsx
<Container theme="light">
  <div>
    <h2>Bright Adventure</h2>
    <p>Content with light galaxy background</p>
  </div>
</Container>
```

### Container with Multiple Components

```tsx
import { Container, Title, Button } from "clue-hunt-ui";

<Container theme="dark">
  <Title
    label="Space Adventure"
    titleSize="xl"
    gradient={true}
    align="center"
  />
  <Button label="Start Mission" primary={true} mode="pulse" />
</Container>;
```
