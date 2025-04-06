import { useState } from "react";

import "./App.css";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, Label, Input } from "clue-hunt-ui";

function App() {
  const [count, setCount] = useState(0);
  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  const handleClickCustomCount = () => {
    if (inputCustomCountValue === "") {
      setCount((count) => count + 1);
    } else {
      setCount(Number(inputCustomCountValue));
    }
  };

  return (
    <>
      <Label>My Label</Label>
      <br />
      <Input
        placeholder="Custom count"
        value={inputCustomCountValue}
        onChange={(e) => setInputCustomCountValue(e.target.value)}
      />
      <br />
      <Button onClick={handleClickCustomCount}>count is {count}</Button>
    </>
  );
}

export default App;
