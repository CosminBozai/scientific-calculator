import "./styles/App.scss";
import { MathJaxContext } from "better-react-mathjax";
import MainKeyboard from "./components/MainKeyboard";
import React, { useState } from "react";
import Screen from "./components/Screen";

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
  const [hasFocus, setHasFocus] = useState(false);
  const handleFocus = (e: React.MouseEvent) => {
    const keyboard = document.querySelector("#main-keyboard");
    const input = document.querySelector(".input.main");
    const target = e.target as HTMLElement;
    console.log(target);
    keyboard?.contains(target) || target === input
      ? setHasFocus(true)
      : setHasFocus(false);
  };

  return (
    <div onClick={handleFocus}>
      <MathJaxContext version={3} config={mathjaxConfig}>
        <div id="calculator-body">
          <Screen hasFocus={hasFocus} />
          <MainKeyboard />
        </div>
      </MathJaxContext>
    </div>
  );
}

export default App;
