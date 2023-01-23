import "./styles/App.scss";
import { MathJaxContext } from "better-react-mathjax";
import Input from "./components/Input";
import MainKeyboard from "./components/MainKeyboard";
import { atom, useAtom } from "jotai";
import React, { useState } from "react";

//TODO: Make the keyboard functional again

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
    const input = document.querySelector(".input");
    const target = e.target as HTMLElement;
    keyboard?.contains(target) || target === input
      ? setHasFocus(true)
      : setHasFocus(false);
  };

  return (
    <div onClick={handleFocus}>
      <MathJaxContext version={3} config={mathjaxConfig}>
        <Input hasFocus={hasFocus} />
        <section id="keyboard-section">
          <MainKeyboard />
        </section>
      </MathJaxContext>
    </div>
  );
}

export default App;
