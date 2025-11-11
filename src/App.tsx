import { useState } from "react";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import {
  AppMenu,
  Button,
  Container,
  UnlockToolTip,
  SubmitButton,
  QuestionIconToolTip,
  SkipButton,
  DraggingPuzzle,
} from "clue-hunt-ui";

import "./App.css";

function App() {
  const [isLocked, setIsLocked] = useState(true);

  const handleToggle = () => {
    setIsLocked(!isLocked);
  };

  return (
    <>
      <AppMenu />

      <Container theme={"dark"}>
        <DraggingPuzzle handleUnlockNavigation={handleToggle} theme={"dark"} />
        <QuestionIconToolTip size="large" />
        <UnlockToolTip />
        <SubmitButton label="Submit" submit />
        <Button label="Count" primary={isLocked} isLocked={isLocked} />
        <SkipButton label="Skip" onClick={handleToggle} />
      </Container>
    </>
  );
}

export default App;
