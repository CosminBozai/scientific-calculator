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
        <svg
          className="error-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
        </svg>
        <span className="error-tooltip">{errorMsg}</span>
      </div>
    );
  } else {
    return <div className="result-output">{result}</div>;
  }
}

export default Result;
