import MathJax from "better-react-mathjax/MathJax";
import "../styles/MainKeyboard.scss";
import { useAtom } from "jotai";
import { valuesArrAtom } from "./Input";
import {
  addAbsFunc,
  addCosFunc,
  addOpenParanthesis,
  addSinFunc,
  addSqrtFunc,
  addTanFunc,
} from "../utils/specialCharsHandler";
import {
  addCharAtCursor,
  deleteCharAtCursor,
  moveCursorRight,
  moveCursorLeft,
} from "../utils/cursorControls";

//TODO: add logic for a^2, a^b and the other buttons
//TODO: add clear button

function MainKeyboard() {
  const [valuesArr, setValuesArr] = useAtom(valuesArrAtom);
  const clearInput = () => {
    setValuesArr(() => ["cursor"]);
  };
  return (
    <div id="main-keyboard">
      <div id="left">
        <button>
          <MathJax>{`\\(\a^{2}\\)`}</MathJax>
        </button>
        <button>
          <MathJax>{`\\(\a^{b}\\)`}</MathJax>
        </button>
        <button onClick={() => setValuesArr(addAbsFunc(valuesArr))}>abs</button>
        <button onClick={() => setValuesArr(addSqrtFunc(valuesArr))}>
          <MathJax>{`\\(\\sqrt{}\\)`}</MathJax>
        </button>
        <button>pla</button>
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
          /
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
        <button className="enter">enter</button>
      </div>
    </div>
  );
}

export default MainKeyboard;
