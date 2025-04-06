import { useState } from "react";

import "./App.css";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, Label, QuizForm } from "clue-hunt-ui";
import { questionSetOne } from "./quizSets";

function App() {
  const [count, setCount] = useState(0);

  const handleClickCustomCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Label>My Label</Label>
      <br />
      <QuizForm questions={questionSetOne} />
      <br />
      {count}
      <Button onClick={handleClickCustomCount} label="Count" />
    </>
  );
}

export default App;
