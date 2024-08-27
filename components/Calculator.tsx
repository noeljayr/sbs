"use client";

import { useState, useEffect } from "react";
import {
  IconBackspace,
  IconDivide,
  IconX,
  IconMathPi,
  IconSquareRoot,
  IconChevronUp,
} from "@tabler/icons-react";

const Calculator: React.FC = () => {
  const [shift, setShift] = useState(false);
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isRad, setIsRad] = useState<boolean>(true); // Start with RAD mode
  const [inputAnimation, setInputAnimation] = useState<boolean>(false);
  const [resultAnimation, setResultAnimation] = useState<boolean>(false);

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
    setInputAnimation(true); // Trigger input animation
  };

  const calculateResult = () => {
    try {
      let expression = input;

      // Ensure all opened parentheses for advanced operations are closed
      const openParentheses = (expression.match(/\(/g) || []).length;
      const closeParentheses = (expression.match(/\)/g) || []).length;
      expression += ")".repeat(openParentheses - closeParentheses);

      // Replace symbols with their JavaScript equivalents
      expression = expression.replace(/√/g, "Math.sqrt");
      expression = expression.replace(/π/g, "Math.PI");
      expression = expression.replace(/e/g, "Math.E");

      // Handle trigonometric functions based on RAD or DEG mode
      if (!isRad) {
        expression = expression.replace(
          /Math\.sin\(([^)]+)\)/g,
          (_, angle) => `Math.sin(${angle} * Math.PI / 180)`
        );
        expression = expression.replace(
          /Math\.cos\(([^)]+)\)/g,
          (_, angle) => `Math.cos(${angle} * Math.PI / 180)`
        );
        expression = expression.replace(
          /Math\.tan\(([^)]+)\)/g,
          (_, angle) => `Math.tan(${angle} * Math.PI / 180)`
        );
        expression = expression.replace(
          /Math\.sinh\(([^)]+)\)/g,
          (_, angle) => `Math.sinh(${angle} * Math.PI / 180)`
        );
        expression = expression.replace(
          /Math\.cosh\(([^)]+)\)/g,
          (_, angle) => `Math.cosh(${angle} * Math.PI / 180)`
        );
        expression = expression.replace(
          /Math\.tanh\(([^)]+)\)/g,
          (_, angle) => `Math.tanh(${angle} * Math.PI / 180)`
        );
      }

      // Correct logarithm to base 10 and ln (logarithm base e)
      expression = expression.replace(/log\(([^)]+)\)/g, "Math.log10($1)");
      expression = expression.replace(/ln\(([^)]+)\)/g, "Math.log($1)");

      // Handle factorial separately
      expression = expression.replace(/(\d+)!/g, (_, n) =>
        factorial(parseInt(n)).toString()
      );

      // Handle power (^) operator
      expression = expression.replace(
        /(\d+)\^\(([^)]+)\)/g,
        (_, base, exp) => `Math.pow(${base}, ${exp})`
      );

      // Handle nCr and nPr
      expression = expression.replace(/(\d+)nCr\((\d+)\)/g, (_, n, r) =>
        nCr(parseInt(n), parseInt(r)).toString()
      );
      expression = expression.replace(/(\d+)nPr\((\d+)\)/g, (_, n, r) =>
        nPr(parseInt(n), parseInt(r)).toString()
      );

      // Handle sec
      expression = expression.replace(
        /sec\(([^)]+)\)/g,
        (_, angle) => `1 / Math.cos(${angle})`
      );

      const evaluatedResult = eval(expression); // Use eval for simplicity, but consider safer alternatives in production
      setResult(formatWithCommas(evaluatedResult.toString()));
      setResultAnimation(true);
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setInputAnimation(true); // Trigger input animation
    setResultAnimation(true); // Trigger result animation
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
    setInputAnimation(true); // Trigger input animation
  };

  const handleAdvanced = (func: string) => {
    // Automatically add a left parenthesis for advanced operations
    setInput((prev) => prev + `${func}(`);
    setInputAnimation(true); // Trigger input animation
  };

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const nCr = (n: number, r: number): number => {
    return factorial(n) / (factorial(r) * factorial(n - r));
  };

  const nPr = (n: number, r: number): number => {
    return factorial(n) / factorial(n - r);
  };

  const formatWithCommas = (x: string) => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleRadDeg = () => {
    setIsRad((prev) => !prev);
  };

  useEffect(() => {
    if (inputAnimation) {
      setTimeout(() => setInputAnimation(false), 500); // Reset animation after it plays
    }
  }, [inputAnimation]);

  useEffect(() => {
    if (resultAnimation) {
      setTimeout(() => setResultAnimation(false), 500); // Reset animation after it plays
    }
  }, [resultAnimation]);

  return (
    <div className="calculator flex flex-col gap-4">
      <div className="display">
        <div className={`result ${resultAnimation ? "animated" : ""}`}>
          {result}
        </div>
        <div className={`input ${inputAnimation ? "animated" : ""}`}>
          {input}
        </div>
      </div>
      <div className="buttons">
        <div className="standard grid">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button className="qual-sign" onClick={calculateResult}>
            =
          </button>
          <div className="history flex flex-col gap-2">
            <h2>History</h2>
          </div>
        </div>

        <div className="advanced grid">
          <button onClick={handleBackspace}>
            <IconBackspace />
          </button>
          <button onClick={clearInput}>AC</button>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>
            <IconX />
          </button>
          <button onClick={() => handleClick("/")}>
            <IconDivide />
          </button>
          {shift ? (
            <button onClick={() => handleAdvanced("nCr")}>nCr</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.PI")}>
              <IconMathPi />
            </button>
          )}

          {shift ? (
            <button onClick={() => handleAdvanced("nPr")}>nPr</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.E")}>e</button>
          )}

          {shift ? (
            <button onClick={() => handleAdvanced("sec")}>sec</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.sqrt")}>
              <IconSquareRoot />
            </button>
          )}

          <button onClick={() => handleAdvanced("Math.pow")}>
            <IconChevronUp />
          </button>
          {shift ? (
            <button onClick={() => handleAdvanced("Math.sinh")}>sinh</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.sin")}>sin</button>
          )}

          {shift ? (
             <button onClick={() => handleAdvanced("Math.cosh")}>cosh</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.cos")}>cos</button>
          )}

          {shift ? (
            <button onClick={() => handleAdvanced("Math.tanh")}>tanh</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.tan")}>tan</button>
          )}

          {shift ? (
            <button onClick={() => handleAdvanced("Math.log")}>ln</button>
          ) : (
            <button onClick={() => handleAdvanced("Math.log10")}>log</button>
          )}

          <button onClick={() => handleClick("!")}>!</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button className="rad-deg" onClick={toggleRadDeg}>
            {isRad ? "RAD" : "DEG"}
          </button>
          <button
            onClick={() => {
              setShift(!shift);
            }}
            className={shift ? "shift" : ""}
          >
            Shift
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
