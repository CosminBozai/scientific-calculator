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

function MainKeyboard() {
  const [valuesArr, setValuesArr] = useAtom(valuesArrAtom);
  const clearInput = () => {
    setValuesArr(() => ["cursor"]);
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
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "7"))}>
          7
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "8"))}>
          8
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "9"))}>
          9
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "/"))}>
          <MathJax>{`\\(\\div\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "4"))}>
          4
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "5"))}>
          5
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "6"))}>
          6
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "*"))}>
          x
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "1"))}>
          1
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "2"))}>
          2
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "3"))}>
          3
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "-"))}>
          -
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "0"))}>
          0
        </button>
        <button onClick={() => setValuesArr(addCharAtCursor(valuesArr, "."))}>
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
        <button onClick={() => moveCursorLeft(valuesArr)}>left</button>
        <button onClick={() => moveCursorRight(valuesArr)}>right</button>
        <button className="clear" onClick={clearInput}>
          clear
        </button>
        <button
          className="backspace"
          onClick={() => setValuesArr(deleteCharAtCursor(valuesArr))}
        >
          back
        </button>
        <button className="enter">
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
