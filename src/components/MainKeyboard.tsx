import MathJax from "better-react-mathjax/MathJax";
import "../styles/MainKeyboard.scss";
import { useAtom } from "jotai";
import { valuesArrAtom } from "./Input";
import {
  addAbsFunc,
  addCosFunc,
  addOpenParanthesis,
  addQuantifyFunc,
  addRootFunc,
  addSinFunc,
  addSquareFunc,
  addSquarerootFunc,
  addTanFunc,
} from "../utils/specialCharsHandler";
import {
  addCharAtCursor,
  deleteCharAtCursor,
  moveCursorRight,
  moveCursorLeft,
} from "../utils/cursorControls";
import { pastValuesAtom } from "./Screen";

//FIXME: Find a way to keep the button from getting focus when pressed

function MainKeyboard() {
  const [valuesArr, setValuesArr] = useAtom(valuesArrAtom);
  const [pastValues, setPastValues] = useAtom(pastValuesAtom);

  const clearInput = () => {
    valuesArr.length > 1
      ? setValuesArr(() => ["cursor"])
      : setPastValues(() => []);
  };
  const handleReturn = () => {
    if (valuesArr.length > 1) {
      const filtered = valuesArr.filter(
        (char) => char !== " " && char !== "cursor"
      );
      const value = filtered.join("");
      const result = document.querySelector(".result-output.main")?.innerHTML;
      setPastValues((prev) => [
        ...prev,
        { values: value, result: result || "error" },
      ]);
      setValuesArr(() => ["cursor"]);
    }
  };

  const undoReturn = () => {
    if (pastValues.length > 0) {
      setValuesArr(Array.from(pastValues[pastValues.length - 1].values));
      setPastValues(pastValues.slice(0, -1));
    }
  };
  return (
    <div id="main-keyboard">
      <div id="left">
        <button onClick={() => setValuesArr(addSquareFunc(valuesArr))}>
          <MathJax>{`\\(\a^{2}\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addQuantifyFunc(valuesArr))}>
          <MathJax>{`\\(\a^{b}\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addAbsFunc(valuesArr))}>abs</button>
        <button onClick={() => setValuesArr(addSquarerootFunc(valuesArr))}>
          <MathJax>{`\\(\\sqrt{}\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addRootFunc(valuesArr))}>
          <MathJax>{`\\(\\sqrt[n]{}\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "pi"))}>
          <MathJax>{`\\(\\pi\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addSinFunc(valuesArr))}>sin</button>
        <button onClick={() => setValuesArr(addCosFunc(valuesArr))}>cos</button>
        <button onClick={() => setValuesArr(addTanFunc(valuesArr))}>tan</button>
        <button onClick={() => setValuesArr(addOpenParanthesis(valuesArr))}>
          {"("}
        </button>
        <button>{")"}</button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "!"))}>
          !
        </button>
      </div>
      <div id="center">
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "7"))}
        >
          7
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "8"))}
        >
          8
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "9"))}
        >
          9
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "/"))}>
          <MathJax>{`\\(\\div\\)`}</MathJax>
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "4"))}
        >
          4
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "5"))}
        >
          5
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "6"))}
        >
          6
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "*"))}>
          x
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "1"))}
        >
          1
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "2"))}
        >
          2
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "3"))}
        >
          3
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "-"))}>
          -
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "0"))}
        >
          0
        </button>
        <button
          className="digit"
          onClick={() => setValuesArr(addCharAtCursor(valuesArr, "."))}
        >
          .
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "%"))}>
          %
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "+"))}>
          +
        </button>
      </div>
      <div id="right">
        <button className="nav-btn" onClick={() => moveCursorLeft(valuesArr)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
          </svg>
        </button>
        <button className="nav-btn" onClick={() => moveCursorRight(valuesArr)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
          </svg>
        </button>
        <button onClick={clearInput}>
          {valuesArr.length > 1 ? "clear" : "clear all"}
        </button>
        <button onClick={undoReturn}>undo</button>
        <button
          className="backspace"
          onClick={() => setValuesArr(deleteCharAtCursor(valuesArr))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m22.4 31.7 5.6-5.6 5.6 5.6 2.15-2.15L30.1 24l5.55-5.55-2.15-2.15-5.5 5.6-5.6-5.6-2.15 2.15L25.9 24l-5.65 5.55ZM6 24l8.45-11.95q.65-.9 1.55-1.475.9-.575 2-.575h21q1.25 0 2.125.875T42 13v22q0 1.25-.875 2.125T39 38H18q-1.1 0-2-.575-.9-.575-1.55-1.475Zm3.75 0 7.7 11H39V13H17.45ZM39 24V13v22Z" />
          </svg>
        </button>
        <button className="enter" onClick={handleReturn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            height="48"
            width="48"
          >
            <path d="M18 36 6.05 24.05 18 12.1l2.15 2.15-8.35 8.35H39V14h3v11.55H11.85l8.3 8.3Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MainKeyboard;
