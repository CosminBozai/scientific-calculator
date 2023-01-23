import { useEffect, useState } from "react";
import {
  addCharAtCursor,
  deleteCharAtCursor,
  moveCursorLeft,
  moveCursorRight,
} from "../utils/cursorControls";
import "../styles/Input.scss";
import Result from "./Result";

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Backspace":
        if (valuesArr.indexOf("cursor") !== 0)
          setValuesArr(deleteCharAtCursor(valuesArr));
        break;
      // FIXME: try finding a way to make moving the arrow faster
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
    <div className="input-wrapper">
      <div onKeyDown={handleKeyPress} id="input" tabIndex={0}>
        {inputElements}
      </div>
      <Result valuesArr={valuesArr} />
    </div>
  );
}

export default Input;
