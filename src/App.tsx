import { useState } from "react";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import {
  AppMenu,
  Button,
  QuizForm,
  Container,
  UnlockToolTip,
  SubmitButton,
  QuestionIconToolTip,
  SkipButton,
  QuestionForm,
  DraggingPuzzle,
} from "clue-hunt-ui";
import { questionSetOne } from "./quizSets";

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
        <QuestionForm />
        <QuestionIconToolTip size="large" />
        <UnlockToolTip />
        <SubmitButton label="Submit" submit />
        <Button label="Count" primary={isLocked} isLocked={isLocked} />
        <QuizForm questions={questionSetOne} onClick={handleToggle} />
        <SkipButton label="Skip" onClick={handleToggle} />
      </Container>
    </>
  );
}

export default App;
