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
} from "clue-hunt-ui";
import { questionSetOne } from "./quizSets";

import "./App.css";

function App() {
  const [isLocked, setIsLocked] = useState(true);

  const handleToggle = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <AppMenu />
      <QuestionIconToolTip size="large" />
      <UnlockToolTip />
      <SubmitButton label="Submit" />
      <Button label="Count" primary={isLocked} isLocked={isLocked} />
      <QuizForm questions={questionSetOne} onClick={handleToggle} />
      <SkipButton label="Skip" onClick={handleToggle} />
    </Container>
  );
}

export default App;
