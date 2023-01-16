import * as math from "mathjs";
import React, { useEffect, useState } from "react";
import MainKeyboard from "./components/MainKeyboard";
import { checkValidity, checkIfFunction } from "./utils/checks";
import "./styles/App.scss";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const mathjaxConfig = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    handleEval();
  }, [inputValue]);

  const handleInput = (value: string) => {
    if (checkIfFunction(inputValue)) {
      setInputValue(inputValue.slice(0, -1) + value + ")");
    } else {
      setInputValue(inputValue + value);
    }
  };

  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleEval = () => {
    try {
      let evaluationResult: string;
      const isValidInput: string = checkValidity(inputValue);
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
    } else if (e.key === " ") {
      handleInput(" ");
    } else if (e.key.match(/^[0-9a-z+\-*/().^!]$/)) {
      handleInput(e.key);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <MathJaxContext version={3} config={mathjaxConfig}>
      <div className="input-field" onKeyDown={handleKeyPress} tabIndex={0}>
        <MathJax>{inputValue}</MathJax>
      </div>
      <div>result: {result}</div>
      <section id="keyboard-section">
        <MainKeyboard
          handleInput={handleInput}
          handleDelete={handleDelete}
          handleClear={handleClear}
          inputValue={inputValue}
        />
      </section>
    </MathJaxContext>
  );
}

export default App;
