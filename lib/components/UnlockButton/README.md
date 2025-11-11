# UnlockButton

A button component designed for unlock/reveal functionality with distinctive styling.

## Features

- 🔓 Unlock-themed styling
- 🎯 Simple click interface
- 🎨 Distinctive button design
- 📝 Customizable label text

## Props

| Prop      | Type         | Default           | Description                           |
| --------- | ------------ | ----------------- | ------------------------------------- |
| `unlock`  | `boolean`    | `false`           | Whether the button is in unlock state |
| `label`   | `string`     | `"Unlock button"` | Button text content                   |
| `onClick` | `() => void` | -                 | Click handler function                |

## Usage

### Basic Unlock Button

```tsx
import { UnlockButton } from "clue-hunt-ui";

<UnlockButton onClick={() => console.log("Unlocked!")} />;
```

### Custom Label Unlock Button

```tsx
<UnlockButton label="Reveal Secret" onClick={() => revealSecret()} />
```

### Unlock State Button

```tsx
<UnlockButton
  label="Access Granted"
  unlock={true}
  onClick={() => console.log("Access granted!")}
/>
```

### Game Context Usage

```tsx
import { UnlockButton } from "clue-hunt-ui";

function PuzzleSolution() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Unlock game content
    unlockNextLevel();
  };

  return (
    <UnlockButton
      label={isUnlocked ? "Unlocked!" : "Unlock Next Level"}
      unlock={isUnlocked}
      onClick={handleUnlock}
    />
  );
}
```

### Multiple Unlock Buttons

```tsx
<div className="unlock-section">
  <UnlockButton label="Unlock Hint 1" onClick={() => unlockHint(1)} />
  <UnlockButton label="Unlock Hint 2" onClick={() => unlockHint(2)} />
  <UnlockButton label="Unlock Solution" onClick={() => unlockSolution()} />
</div>
```

## Styling Notes

- Designed with unlock/reveal theme in mind
- Works well in puzzle and game contexts
- Button styling emphasizes the unlock action
