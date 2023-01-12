import "../styles/MainKeyboard.scss";
import { exponentiationByTwo } from "../utils/functionHandlers";

type clickProps = {
  handleInput: (value: string) => void;
  handleDelete: () => void;
  inputValue: string;
};

function MainKeyboard({ handleInput, handleDelete, inputValue }: clickProps) {
  return (
    <div id="main-keyboard">
      <div id="left">
        <button onClick={() => handleInput(exponentiationByTwo(inputValue))}>
          a^2
        </button>
        <button onClick={() => handleInput("^")}>a^b</button>
        <button onClick={() => handleInput("abs(")}>abs</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button onClick={() => handleInput("(")}>{"("}</button>
        <button onClick={() => handleInput(")")}>{")"}</button>
        <button>pla</button>
      </div>
      <div id="center">
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("/")}>/</button>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("*")}>x</button>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("-")}>-</button>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleInput(".")}>.</button>
        <button>ans</button>
        <button onClick={() => handleInput("+")}>+</button>
      </div>
      <div id="right">
        <button>bbb</button>
        <button>bbb</button>
        <button>bbb</button>
        <button>bbb</button>
        <button className="backspace" onClick={handleDelete}>
          back
        </button>
        <button className="enter">enter</button>
      </div>
    </div>
  );
}

export default MainKeyboard;
