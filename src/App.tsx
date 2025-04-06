import { useState } from "react";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, QuizForm, Container } from "clue-hunt-ui";
import { questionSetOne } from "./quizSets";

import "./App.css";

function App() {
  const [isLocked, setIsLocked] = useState(true);

  const handleToggle = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <Button label="Count" primary={isLocked} isLocked={isLocked} />
      <QuizForm questions={questionSetOne} onClick={handleToggle} />
    </Container>
  );
}

export default App;
