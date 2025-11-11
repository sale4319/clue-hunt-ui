# SubmitButton

A specialized button component designed for form submissions with submit-specific styling and behavior.

## Features

- 🚀 Submit-specific styling
- 📏 Three sizes (small, medium, large)
- ✨ Glow effect on hover
- 🎨 Blue submit state styling
- 🎨 Customizable background color

## Props

| Prop              | Type                              | Default      | Description                                |
| ----------------- | --------------------------------- | ------------ | ------------------------------------------ |
| `label`           | `string`                          | **Required** | Button text content                        |
| `submit`          | `boolean`                         | `false`      | Whether to use submit styling (blue theme) |
| `size`            | `"small" \| "medium" \| "large"`  | `"medium"`   | Button size                                |
| `backgroundColor` | `string`                          | -            | Custom background color                    |
| `type`            | `"submit" \| "button" \| "reset"` | `"submit"`   | Button type attribute                      |
| `onClick`         | `() => void`                      | -            | Click handler function                     |

## Usage

### Basic Submit Button

```tsx
import { SubmitButton } from "clue-hunt-ui";

<SubmitButton
  label="Submit Answer"
  onClick={() => console.log("Form submitted!")}
/>;
```

### Submit Button with Blue Theme

```tsx
<SubmitButton
  label="Complete Quest"
  submit={true}
  size="large"
  onClick={() => console.log("Quest completed!")}
/>
```

### Custom Styled Submit Button

```tsx
<SubmitButton
  label="Send Message"
  backgroundColor="#28a745"
  size="medium"
  type="submit"
/>
```

### Small Submit Button

```tsx
<SubmitButton label="Save" size="small" submit={true} />
```
