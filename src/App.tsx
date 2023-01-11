import * as math from "mathjs";
import { useRef, useState } from "react";
import checkInput from "./utils/checkInput";

function App() {
  const input = useRef(null);
  const [result, setResult] = useState("");
  const handleChange = (e: React.FormEvent) => {
    try {
      let evaluationResult: string;
      const target = e.target as HTMLInputElement;
      const validInput: string = checkInput(target.value);
      validInput === "valid"
        ? (evaluationResult = math.evaluate(target.value))
        : (evaluationResult = validInput);
      setResult(evaluationResult);
    } catch (err) {
      setResult("Could not evaluate this expression");
    }
  };

  return (
    <>
      <input type="text" onChange={handleChange} ref={input} />
      <div>result: {result}</div>
    </>
  );
}

export default App;
