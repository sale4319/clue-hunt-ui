# UnlockToolTip

A specialized tooltip component designed for unlock/reveal functionality with customizable content and styling.

## Features

- 🔓 Unlock-themed tooltip design
- 💬 Hover-activated tooltip display
- 📏 Customizable size (numeric value)
- 🎨 Submit state styling
- 🖱️ Mouse interaction support
- ✨ Smooth show/hide animations

## Props

| Prop      | Type         | Default          | Description                             |
| --------- | ------------ | ---------------- | --------------------------------------- |
| `content` | `string`     | `"Tooltip text"` | Text content displayed in the tooltip   |
| `submit`  | `boolean`    | `false`          | Whether to use submit styling           |
| `size`    | `number`     | `30`             | Size of the unlock icon/trigger element |
| `onClick` | `() => void` | -                | Click handler function                  |

## Usage

### Basic Unlock Tooltip

```tsx
import { UnlockToolTip } from "clue-hunt-ui";

<UnlockToolTip content="Click to unlock this feature!" />;
```

### Custom Sized Tooltip

```tsx
<UnlockToolTip content="Large unlock hint" size={50} />
```

### Submit State Tooltip

```tsx
<UnlockToolTip
  content="Submit your answer to unlock the next clue"
  submit={true}
  size={40}
/>
```

### Interactive Unlock Tooltip

```tsx
<UnlockToolTip
  content="Click to reveal the secret message"
  onClick={() => {
    console.log("Unlock triggered!");
    revealSecretContent();
  }}
/>
```

### In Puzzle Context

```tsx
import { UnlockToolTip, Button, Title } from "clue-hunt-ui";

function PuzzleWithHints() {
  const [hintsUnlocked, setHintsUnlocked] = useState(0);

  const unlockHint = (hintNumber: number) => {
    if (hintsUnlocked >= hintNumber) return;
    setHintsUnlocked(hintNumber);
    console.log(`Hint ${hintNumber} unlocked!`);
  };

  return (
    <div>
      <Title label="Ancient Puzzle" titleSize="large" />

      <div className="puzzle-area">{/* Puzzle content */}</div>

      <div className="hints-section">
        <h3>Need Help?</h3>

        <UnlockToolTip
          content="Unlock Hint 1: Look for the pattern in the stars"
          size={35}
          onClick={() => unlockHint(1)}
        />

        {hintsUnlocked >= 1 && (
          <UnlockToolTip
            content="Unlock Hint 2: The answer lies in the constellation"
            size={35}
            onClick={() => unlockHint(2)}
          />
        )}

        {hintsUnlocked >= 2 && (
          <UnlockToolTip
            content="Final Hint: Connect the brightest stars"
            submit={true}
            size={40}
            onClick={() => unlockHint(3)}
          />
        )}
      </div>
    </div>
  );
}
```

### Progressive Unlock System

```tsx
import { UnlockToolTip, SpacerElement } from "clue-hunt-ui";

function ProgressiveUnlock() {
  const [unlockedItems, setUnlockedItems] = useState<number[]>([]);

  const handleUnlock = (itemId: number) => {
    if (!unlockedItems.includes(itemId)) {
      setUnlockedItems((prev) => [...prev, itemId]);
    }
  };

  const isUnlocked = (itemId: number) => unlockedItems.includes(itemId);

  return (
    <div>
      <h2>Space Archive - {unlockedItems.length}/5 Items Unlocked</h2>

      <div className="archive-grid">
        {[1, 2, 3, 4, 5].map((itemId) => (
          <div key={itemId} className="archive-item">
            {isUnlocked(itemId) ? (
              <div>
                <h4>Archive Entry {itemId}</h4>
                <p>Secret content revealed!</p>
              </div>
            ) : (
              <UnlockToolTip
                content={`Unlock Archive Entry ${itemId}`}
                size={45}
                onClick={() => handleUnlock(itemId)}
              />
            )}
            <SpacerElement size="small" />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Game Achievement System

```tsx
import { UnlockToolTip, Title } from "clue-hunt-ui";

function AchievementPanel() {
  const achievements = [
    { id: 1, name: "First Steps", description: "Complete your first puzzle" },
    { id: 2, name: "Explorer", description: "Discover 10 hidden areas" },
    { id: 3, name: "Master", description: "Solve all expert puzzles" },
  ];

  const [unlockedAchievements, setUnlockedAchievements] = useState([1]);

  const tryUnlock = (achievementId: number) => {
    // Check if player meets criteria
    const canUnlock = checkAchievementCriteria(achievementId);

    if (canUnlock) {
      setUnlockedAchievements((prev) => [...prev, achievementId]);
      showAchievementNotification(achievementId);
    } else {
      console.log("Achievement criteria not met yet");
    }
  };

  return (
    <div>
      <Title label="Achievements" titleSize="large" />

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            {unlockedAchievements.includes(achievement.id) ? (
              <div className="unlocked">
                <h4>{achievement.name}</h4>
                <p>{achievement.description}</p>
                <span className="unlocked-badge">✓ Unlocked</span>
              </div>
            ) : (
              <div className="locked">
                <h4>???</h4>
                <UnlockToolTip
                  content={`Unlock: ${achievement.description}`}
                  size={30}
                  onClick={() => tryUnlock(achievement.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Interaction Notes

- Hover over the unlock icon to see the tooltip
- Tooltip appears with smooth fade-in animation
- Click functionality is optional and customizable
- Tooltip automatically hides when mouse leaves
- Size parameter controls the unlock trigger element size
- Works great for progressive content reveal systems
