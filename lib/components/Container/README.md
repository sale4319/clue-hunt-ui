# Container

A flexible, responsive layout wrapper component that provides a structured container with an optional animated galaxy background. Built with accessibility, performance, and customization in mind.

## Features

- 🌌 **Galaxy Background**: Optional integrated galaxy background animation
- 🌓 **Theme Support**: Light and dark theme variants
- � **Responsive Design**: Mobile-first responsive layout system
- 🎨 **Layout Variants**: Multiple layout options for different use cases
- ♿ **Accessible**: Built-in ARIA attributes and semantic HTML
- 🎯 **Customizable**: Extensive customization props and CSS custom properties
- 🖨️ **Print Friendly**: Optimized print styles included
- ⚡ **Performance**: Optimized for motion preferences and high contrast

## Props

| Prop             | Type                                                                  | Default      | Description                                  |
| ---------------- | --------------------------------------------------------------------- | ------------ | -------------------------------------------- |
| `children`       | `React.ReactNode`                                                     | **Required** | Content to be rendered inside the container  |
| `theme`          | `"light" \| "dark"`                                                   | `"dark"`     | Theme for the galaxy background and styling  |
| `className`      | `string`                                                              | `""`         | Custom CSS class name for additional styling |
| `padding`        | `"none" \| "small" \| "medium" \| "large" \| "extra-large"`           | `"medium"`   | Padding size for responsive spacing          |
| `maxWidth`       | `"small" \| "medium" \| "large" \| "extra-large" \| "full" \| "none"` | `"large"`    | Maximum width constraint for content area    |
| `variant`        | `"default" \| "centered" \| "full-height" \| "minimal"`               | `"default"`  | Layout variant for different use cases       |
| `showBackground` | `boolean`                                                             | `true`       | Whether to display the galaxy background     |
| `topPadding`     | `string \| number`                                                    | `undefined`  | Custom top padding override                  |
| `aria-label`     | `string`                                                              | `undefined`  | ARIA label for accessibility                 |

## Usage

### Basic Container

```tsx
import { Container } from "clue-hunt-ui";

<Container theme="dark">
  <h1>Welcome to the Galaxy</h1>
  <p>Your content here...</p>
</Container>;
```

### Responsive Container with Custom Spacing

```tsx
<Container
  theme="light"
  padding="large"
  maxWidth="medium"
  aria-label="Main content area"
>
  <div>
    <h2>Responsive Layout</h2>
    <p>This container adapts to different screen sizes automatically.</p>
  </div>
</Container>
```

### Centered Layout for Landing Pages

```tsx
<Container variant="centered" maxWidth="small" showBackground={true}>
  <div>
    <h1>Welcome</h1>
    <p>Perfectly centered content</p>
  </div>
</Container>
```

### Minimal Container Without Background

```tsx
<Container
  variant="minimal"
  showBackground={false}
  padding="small"
  className="custom-container"
>
  <div>Clean, minimal layout without galaxy background</div>
</Container>
```

### Full-Height Container for Single Page Apps

```tsx
<Container variant="full-height" maxWidth="extra-large" topPadding="2rem">
  <div>
    <h1>SPA Content</h1>
    <p>Full viewport height with flexible content area</p>
  </div>
</Container>
```

### Container with Multiple Components

```tsx
import { Container, Title, Button } from "clue-hunt-ui";

<Container theme="dark" padding="large" maxWidth="medium">
  <Title label="Space Adventure" size="large" mode="typewriter" />
  <p>Embark on an epic journey through the cosmos...</p>
  <Button label="Start Adventure" primary size="large" mode="pulse" />
</Container>;
```

## Layout Variants

### Default

Standard layout with top padding and centered content.

### Centered

Flexbox-based centering for perfect vertical and horizontal alignment.

### Full-Height

Full viewport height container ideal for single-page applications.

### Minimal

Reduced padding and spacing for compact layouts.

## Responsive Behavior

The Container component automatically adapts to different screen sizes:

- **Desktop (>768px)**: Full padding and max-width constraints
- **Tablet (768px and below)**: Reduced padding, responsive max-widths
- **Mobile (480px and below)**: Minimal padding, full-width content

## Accessibility Features

- **Semantic HTML**: Uses `main` role and `article`/`section` elements
- **ARIA Support**: Accepts `aria-label` for screen readers
- **High Contrast**: Automatic high contrast mode detection
- **Reduced Motion**: Respects user motion preferences
- **Keyboard Navigation**: Proper focus management

## CSS Custom Properties

The component uses CSS custom properties for easy theming:

```css
.container {
  --container-padding-top: 90px;
  --container-padding-horizontal: 1rem;
  --container-text-align: center;
  --container-background: transparent;
  --section-line-height: 1.6;
  --section-max-width: 800px;
  --section-margin: auto;
}
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { Container, type ContainerProps } from "clue-hunt-ui";

const MyComponent: React.FC<ContainerProps> = (props) => {
  return <Container {...props} />;
};
```

## Performance Considerations

- **Lazy Loading**: Galaxy background loads only when needed
- **CSS-in-JS Optimization**: Minimal runtime overhead
- **Print Optimization**: Special print styles included
- **Motion Preferences**: Automatic animation disabling for reduced motion users

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Migration from v0.1.0

The improved Container maintains backward compatibility. Existing usage will work without changes, but you can now take advantage of new features:

```tsx
// Old usage (still works)
<Container theme="dark">
  {children}
</Container>

// New features available
<Container
  theme="dark"
  padding="large"
  maxWidth="medium"
  variant="centered"
>
  {children}
</Container>
```

    titleSize="xl"
    gradient={true}
    align="center"

/>
<Button label="Start Mission" primary={true} mode="pulse" />
</Container>;

```

```
