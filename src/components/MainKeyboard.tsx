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
        <span onClick={() => setValuesArr(addSquareFunc(valuesArr))}>
          <MathJax>{`\\(\a^{2}\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addQuantifyFunc(valuesArr))}>
          <MathJax>{`\\(\a^{b}\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addAbsFunc(valuesArr))}>abs</span>
        <span onClick={() => setValuesArr(addSquarerootFunc(valuesArr))}>
          <MathJax>{`\\(\\sqrt{}\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addRootFunc(valuesArr))}>
          <MathJax>{`\\(\\sqrt[n]{}\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "pi"))}>
          <MathJax>{`\\(\\pi\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addSinFunc(valuesArr))}>sin</span>
        <span onClick={() => setValuesArr(addCosFunc(valuesArr))}>cos</span>
        <span onClick={() => setValuesArr(addTanFunc(valuesArr))}>tan</span>
        <span onClick={() => setValuesArr(addOpenParanthesis(valuesArr))}>
          {"("}
        </span>
        <span>{")"}</span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "!"))}>
          !
        </span>
      </div>
      <div id="center">
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "7"))}>
          7
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "8"))}>
          8
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "9"))}>
          9
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "/"))}>
          <MathJax>{`\\(\\div\\)`}</MathJax>
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "4"))}>
          4
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "5"))}>
          5
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "6"))}>
          6
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "*"))}>
          x
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "1"))}>
          1
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "2"))}>
          2
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "3"))}>
          3
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "-"))}>
          -
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "0"))}>
          0
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "."))}>
          .
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "%"))}>
          %
        </span>
        <span onClick={() => setValuesArr(addCharAtCursor(valuesArr, "+"))}>
          +
        </span>
      </div>
      <div id="right">
        <span onClick={() => moveCursorLeft(valuesArr)}>left</span>
        <span onClick={() => moveCursorRight(valuesArr)}>right</span>
        <span className="clear" onClick={clearInput}>
          clear
        </span>
        <span
          className="backspace"
          onClick={() => setValuesArr(deleteCharAtCursor(valuesArr))}
        >
          back
        </span>
        <span className="enter">enter</span>
      </div>
    </div>
  );
}

export default MainKeyboard;
