# ShiftingCircles

An interactive puzzle component featuring animated circles that shift positions. Users must interact with the circles to solve the puzzle.

## Features

- 🔴 Animated shifting circles
- 🎯 Interactive puzzle mechanics
- 🔓 Unlock functionality on completion
- 🌓 Light and dark theme support
- 🎨 Randomized circle positioning
- ⚡ Smooth animations and transitions

## Props

| Prop                     | Type                | Default  | Description                             |
| ------------------------ | ------------------- | -------- | --------------------------------------- |
| `handleUnlockNavigation` | `() => void`        | -        | Callback function when puzzle is solved |
| `theme`                  | `"light" \| "dark"` | `"dark"` | Color theme for the circles             |

## Usage

### Basic Shifting Circles

```tsx
import { ShiftingCircles } from "clue-hunt-ui";

<ShiftingCircles
  handleUnlockNavigation={() => {
    console.log("Puzzle solved!");
  }}
/>;
```

### Light Theme Circles

```tsx
<ShiftingCircles
  theme="light"
  handleUnlockNavigation={() => {
    unlockNextSection();
  }}
/>
```

### In Game Context

```tsx
import { ShiftingCircles, Title, Container } from "clue-hunt-ui";

function CirclePuzzleLevel() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePuzzleComplete = () => {
    setIsCompleted(true);
    // Save progress
    saveGameProgress("circle_puzzle_complete");
  };

  return (
    <Container theme="dark">
      <Title
        label="Align the Cosmic Circles"
        titleSize="large"
        gradient={true}
        align="center"
      />

      <ShiftingCircles
        theme="dark"
        handleUnlockNavigation={handlePuzzleComplete}
      />

      {isCompleted && (
        <div className="success-message">
          <Title label="Puzzle Complete!" titleSize="medium" animated={true} />
        </div>
      )}
    </Container>
  );
}
```

### Multiple Puzzle Sequence

```tsx
import { ShiftingCircles, SpacerElement, Button } from "clue-hunt-ui";

function MultiPuzzleGame() {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [completedPuzzles, setCompletedPuzzles] = useState(0);

  const handlePuzzleComplete = () => {
    setCompletedPuzzles((prev) => prev + 1);

    if (currentPuzzle < 2) {
      setCurrentPuzzle((prev) => prev + 1);
    } else {
      // All puzzles complete
      console.log("All circle puzzles completed!");
    }
  };

  const resetPuzzles = () => {
    setCurrentPuzzle(0);
    setCompletedPuzzles(0);
  };

  return (
    <div>
      <h2>Circle Puzzle {currentPuzzle + 1} of 3</h2>
      <p>Completed: {completedPuzzles}/3</p>

      <ShiftingCircles
        key={currentPuzzle} // Force re-render for new puzzle
        theme={currentPuzzle % 2 === 0 ? "dark" : "light"}
        handleUnlockNavigation={handlePuzzleComplete}
      />

      <SpacerElement size="medium" />

      <Button label="Reset All Puzzles" mode="close" onClick={resetPuzzles} />
    </div>
  );
}
```

### With Progress Tracking

```tsx
import { ShiftingCircles, Title } from "clue-hunt-ui";

function TrackedPuzzle() {
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleCompletion = () => {
    const timeElapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(
      `Puzzle solved in ${timeElapsed} seconds with ${attempts} attempts!`
    );

    // Record statistics
    recordPuzzleStats({
      type: "shifting_circles",
      timeElapsed,
      attempts,
      completed: true,
    });
  };

  const handleInteraction = () => {
    setAttempts((prev) => prev + 1);
  };

  return (
    <div>
      <Title label="Precision Challenge" titleSize="large" />
      <p>Attempts: {attempts}</p>

      <div onClick={handleInteraction}>
        <ShiftingCircles
          theme="dark"
          handleUnlockNavigation={handleCompletion}
        />
      </div>
    </div>
  );
}
```

### Responsive Puzzle Layout

```tsx
import { ShiftingCircles, MobileWarning } from "clue-hunt-ui";

function ResponsivePuzzle() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div>
        <MobileWarning />
        <p>This puzzle works best on desktop devices.</p>
      </div>
    );
  }

  return (
    <ShiftingCircles
      theme="dark"
      handleUnlockNavigation={() => {
        console.log("Desktop puzzle completed!");
      }}
    />
  );
}
```

## Puzzle Mechanics

- Circles appear at random positions on the screen
- Users must interact with the circles in a specific pattern
- Successful completion triggers the unlock callback
- Circles shift and animate to provide visual feedback
- Puzzle difficulty increases with complexity of required interactions

## Styling Notes

- Dark theme: Bright circles on dark background
- Light theme: Darker circles on light background
- Smooth CSS animations for circle movements
- Responsive design adapts to container size
- Visual feedback for successful interactions
