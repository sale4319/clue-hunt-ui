# QuestionIconToolTip

An interactive question mark icon that displays a tooltip with helpful information on hover.

## Features

- ❓ Question mark icon with SVG graphics
- 💬 Hover-activated tooltip
- 📏 Three size options (small, medium, large)
- 🎨 Submit state styling
- 🖱️ Mouse interaction support

## Props

| Prop      | Type                             | Default          | Description                           |
| --------- | -------------------------------- | ---------------- | ------------------------------------- |
| `content` | `string`                         | `"Tooltip text"` | Text content displayed in the tooltip |
| `submit`  | `boolean`                        | `false`          | Whether to use submit styling         |
| `size`    | `"small" \| "medium" \| "large"` | `"medium"`       | Size of the question icon             |
| `onClick` | `() => void`                     | -                | Click handler function                |

## Usage

### Basic Question Tooltip

```tsx
import { QuestionIconToolTip } from "clue-hunt-ui";

<QuestionIconToolTip content="This is helpful information!" />;
```

### Different Sizes

```tsx
<div>
  <QuestionIconToolTip content="Small tip" size="small" />

  <QuestionIconToolTip content="Medium tip" size="medium" />

  <QuestionIconToolTip content="Large tip" size="large" />
</div>
```

### With Submit State

```tsx
<QuestionIconToolTip
  content="Click submit when you're ready to proceed"
  submit={true}
  size="large"
/>
```

### Interactive Tooltip

```tsx
<QuestionIconToolTip
  content="Click for more details"
  onClick={() => {
    console.log("Tooltip clicked!");
    // Show detailed help or modal
  }}
/>
```

### In Form Context

```tsx
import { QuestionIconToolTip, SubmitButton } from "clue-hunt-ui";

function HelpfulForm() {
  return (
    <form>
      <div className="form-field">
        <label>
          Username
          <QuestionIconToolTip
            content="Your username must be 3-20 characters long"
            size="small"
          />
        </label>
        <input type="text" name="username" />
      </div>

      <div className="form-field">
        <label>
          Password
          <QuestionIconToolTip
            content="Password should include letters, numbers, and symbols"
            size="small"
          />
        </label>
        <input type="password" name="password" />
      </div>

      <SubmitButton label="Sign Up" submit={true} />
    </form>
  );
}
```

### Game Help System

```tsx
import { QuestionIconToolTip, Title, Button } from "clue-hunt-ui";

function PuzzleInterface() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Title label="Space Puzzle" titleSize="large" />
        <QuestionIconToolTip
          content="Drag the stars to form constellation patterns. Each correct pattern unlocks a clue!"
          size="medium"
          onClick={() => showDetailedInstructions()}
        />
      </div>

      <div className="puzzle-area">{/* Puzzle content */}</div>

      <Button label="Reset Puzzle" mode="close" />
    </div>
  );
}
```

### Multiple Help Points

```tsx
function ComplexInterface() {
  return (
    <div>
      <h2>
        Settings
        <QuestionIconToolTip content="Configure your game preferences here" />
      </h2>

      <div className="setting-item">
        <span>Audio Volume</span>
        <QuestionIconToolTip
          content="Adjust the master volume for all game sounds"
          size="small"
        />
        <input type="range" min="0" max="100" />
      </div>

      <div className="setting-item">
        <span>Difficulty</span>
        <QuestionIconToolTip
          content="Higher difficulty increases puzzle complexity and reduces hints"
          size="small"
        />
        <select>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
    </div>
  );
}
```

## Interaction Notes

- Hover over the question icon to show the tooltip
- Tooltip appears near the icon with smooth animation
- Click functionality is optional and customizable
- Tooltip automatically hides when mouse leaves the area
- Works well in forms, headers, and complex interfaces
