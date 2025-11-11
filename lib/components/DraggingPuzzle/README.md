# DraggingPuzzle

An interactive dragging puzzle component where users must drag an element to a specific position to unlock functionality.

## Features

- 🎯 Drag-and-drop interaction
- 🔓 Unlock mechanism on successful positioning
- 🎨 Visual feedback and animations
- 🌓 Light and dark theme support
- 📱 Touch-friendly for mobile devices

## Props

| Prop                     | Type                | Default        | Description                             |
| ------------------------ | ------------------- | -------------- | --------------------------------------- |
| `handleUnlockNavigation` | `() => void`        | -              | Callback function when puzzle is solved |
| `mode`                   | `string`            | `styles.pulse` | Animation mode for visual feedback      |
| `onClick`                | `() => void`        | -              | Click handler function                  |
| `theme`                  | `"light" \| "dark"` | `"dark"`       | Color theme for the puzzle              |

## Usage

### Basic Dragging Puzzle

```tsx
import { DraggingPuzzle } from "clue-hunt-ui";

<DraggingPuzzle
  handleUnlockNavigation={() => {
    console.log("Puzzle solved!");
    // Unlock next section
  }}
/>;
```

### Light Theme Puzzle

```tsx
<DraggingPuzzle
  theme="light"
  handleUnlockNavigation={() => {
    unlockNextLevel();
  }}
/>
```

### With Custom Mode

```tsx
<DraggingPuzzle
  theme="dark"
  mode="custom-animation"
  handleUnlockNavigation={() => {
    showSuccessMessage();
    proceedToNextPuzzle();
  }}
  onClick={() => {
    console.log("Puzzle element clicked");
  }}
/>
```

### In Game Context

```tsx
import { DraggingPuzzle, Title } from "clue-hunt-ui";

function PuzzleLevel() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handlePuzzleSolved = () => {
    setIsUnlocked(true);
    // Unlock game progress
    saveGameProgress("level_2_unlocked");
  };

  return (
    <div>
      <Title label="Drag the Element" titleSize="large" />

      <DraggingPuzzle
        theme="dark"
        handleUnlockNavigation={handlePuzzleSolved}
      />

      {isUnlocked && (
        <div>
          <p>Puzzle solved! Proceeding to next level...</p>
        </div>
      )}
    </div>
  );
}
```

### Multiple Puzzles

```tsx
import { DraggingPuzzle, SpacerElement } from "clue-hunt-ui";

function MultiPuzzleChallenge() {
  const [completedPuzzles, setCompletedPuzzles] = useState(0);

  const handlePuzzleComplete = (puzzleIndex: number) => {
    setCompletedPuzzles((prev) => prev + 1);
    console.log(`Puzzle ${puzzleIndex + 1} completed!`);
  };

  return (
    <div>
      <h2>Complete All Puzzles: {completedPuzzles}/3</h2>

      <DraggingPuzzle
        handleUnlockNavigation={() => handlePuzzleComplete(0)}
        theme="dark"
      />

      <SpacerElement size="medium" />

      <DraggingPuzzle
        handleUnlockNavigation={() => handlePuzzleComplete(1)}
        theme="light"
      />

      <SpacerElement size="medium" />

      <DraggingPuzzle
        handleUnlockNavigation={() => handlePuzzleComplete(2)}
        theme="dark"
      />
    </div>
  );
}
```

## Interaction Notes

- Drag the puzzle element to the correct position
- Visual feedback shows when you're close to the solution
- Successful positioning triggers the unlock callback
- Supports both mouse and touch interactions
- Puzzle resets if not solved correctly
