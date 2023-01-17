import { useEffect, useState } from "react";
import * as math from "mathjs";
import {
  addCharAtCursor,
  deleteCharAtCursor,
  moveCursorLeft,
  moveCursorRight,
} from "../utils/cursorControls";
import "../styles/Input.scss";

function Input() {
  // makes cursor blink
  const [blink, setBlink] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlink("blink");
      setTimeout(() => {
        setBlink("");
      }, 600);
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  const [valuesArr, setValuesArr] = useState<string[]>(["cursor"]);

  const inputElements = valuesArr.map((char, i) => {
    if (char === " ") {
      return <span key={i}>&nbsp;</span>;
    } else if (char === "cursor") {
      return <span key={i} className={"cursor " + blink}></span>;
    } else {
      return <span key={i}>{char}</span>;
    }
  });

  useEffect(() => {
    const filtered = valuesArr.filter(
      (char) => char !== " " && char !== "cursor"
    );
    const toEvaluate = filtered.join("");
    try {
      const result = math.evaluate(toEvaluate);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, [valuesArr]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Backspace":
        if (valuesArr.indexOf("cursor") !== 0)
          setValuesArr(deleteCharAtCursor(valuesArr));
        break;
      case "ArrowRight":
        if (valuesArr.at(-1) !== "cursor")
          setValuesArr(moveCursorRight(valuesArr));
        break;
      case "ArrowLeft":
        if (valuesArr.length > 1 && valuesArr.at(0) !== "cursor")
          setValuesArr(moveCursorLeft(valuesArr));
        break;
      case " ":
        const newState = [...valuesArr, e.key];
        setValuesArr(moveCursorRight(newState));
        break;
      default:
        if (e.key.match(/^[0-9a-z+\-*/().^!]$/))
          setValuesArr(addCharAtCursor(valuesArr, e.key));
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyPress} id="input" tabIndex={0}>
      {inputElements}
    </div>
  );
}

export default Input;
