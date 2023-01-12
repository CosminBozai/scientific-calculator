import * as math from "mathjs";
import React, { useEffect, useState } from "react";
import MainKeyboard from "./components/MainKeyboard";
import checkInput from "./utils/checkInput";
import "./styles/App.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    handleEval();
  }, [inputValue]);

  const handleInput = (value: string) => {
    setInputValue(inputValue + value);
  };

  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleEval = () => {
    try {
      let evaluationResult: string;
      const isValidInput: string = checkInput(inputValue);
      if (isValidInput === "valid") {
        const evaluated = math.evaluate(inputValue);
        Number.isInteger(evaluated)
          ? (evaluationResult = evaluated.toString())
          : (evaluationResult = evaluated.toFixed(4).toString());
      } else {
        evaluationResult = isValidInput;
      }
      setResult(evaluationResult);
    } catch (err: any) {
      setResult("Could not evaluate this expression");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      handleDelete();
    } else if (e.key.match(/^[0-9+\-*/().^]$/)) {
      handleInput(e.key);
    }
  };

  return (
    <>
      <div onKeyDown={handleKeyPress} tabIndex={0}>
        <input value={inputValue} readOnly />
      </div>
      <div>result: {result}</div>
      <section id="keyboard-section">
        <MainKeyboard
          handleInput={handleInput}
          handleDelete={handleDelete}
          inputValue={inputValue}
        />
      </section>
    </>
  );
}

export default App;
