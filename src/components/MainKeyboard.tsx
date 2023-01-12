import "../styles/MainKeyboard.scss";

type clickProps = {
  handleInput: (value: string) => void;
  handleDelete: () => void;
};

function MainKeyboard({ handleInput, handleDelete }: clickProps) {
  return (
    <div id="main-keyboard">
      <div id="left">
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
        <button>pla</button>
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
