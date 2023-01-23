import * as math from "mathjs";
import { useEffect, useState } from "react";
import { getCustomError } from "../utils/checks";
import "../styles/Result.scss";
import errorSvg from "../assets/error.svg";

interface arrayToEval {
  valuesArr: string[];
}

function Result({ valuesArr }: arrayToEval) {
  const [result, setResult] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const filtered = valuesArr.filter(
      (char) => char !== " " && char !== "cursor"
    );
    const toEvaluate = filtered.join("");
    try {
      const result: number = math.evaluate(toEvaluate);
      if (String(result) === "undefined") {
        setResult("");
      } else if (String(result).length > 30) {
        // check for result length because when typing a function, eg. "abs"...
        //... eval would return a very long string
        setResult("error");
        setErrorMsg(getCustomError(toEvaluate));
      } else {
        setResult(String(result));
      }
    } catch (err) {
      setResult("error");
      setErrorMsg(getCustomError(toEvaluate));
    }
  }, [valuesArr]);

  if (result === "error") {
    return (
      <div className="result-output">
        <img className="error-icon" src={errorSvg} alt="error" />
        <span className="error-tooltip">{errorMsg}</span>
      </div>
    );
  } else {
    return <div className="result-output">{result}</div>;
  }
}

export default Result;