import "./styles/App.scss";
import { MathJaxContext } from "better-react-mathjax";
import Input from "./components/Input";
import MainKeyboard from "./components/MainKeyboard";

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
  return (
    <MathJaxContext version={3} config={mathjaxConfig}>
      <Input />
      <section id="keyboard-section">
        <MainKeyboard />
      </section>
    </MathJaxContext>
  );
}

export default App;
