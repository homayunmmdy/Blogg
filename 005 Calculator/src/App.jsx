import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="w-80 mx-auto my-8 bg-gray-200 rounded-lg p-4 shadow-lg">
      <input
        className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2 text-lg"
        type="text"
        value={input}
        placeholder="Enter expression"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-2">
        <button className="btn" onClick={() => handleClick("1")}>1</button>
        <button className="btn" onClick={() => handleClick("2")}>2</button>
        <button className="btn" onClick={() => handleClick("3")}>3</button>
        <button className="btn" onClick={() => handleClick("+")}>+</button>

        <button className="btn" onClick={() => handleClick("4")}>4</button>
        <button className="btn" onClick={() => handleClick("5")}>5</button>
        <button className="btn" onClick={() => handleClick("6")}>6</button>
        <button className="btn" onClick={() => handleClick("-")}>-</button>

        <button className="btn" onClick={() => handleClick("7")}>7</button>
        <button className="btn" onClick={() => handleClick("8")}>8</button>
        <button className="btn" onClick={() => handleClick("9")}>9</button>
        <button className="btn" onClick={() => handleClick("*")}>*</button>

        <button className="btn" onClick={() => handleClick("0")}>0</button>
        <button className="btn" onClick={() => handleClick(".")}>.</button>
        <button className="btn" onClick={clearInput}>C</button>
        <button className="btn" onClick={() => handleClick("/")}>/</button>
      </div>
      <button className="btn mt-2 col-span-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateResult}>=</button>
      <div className="text-center mt-4 text-2xl font-bold">{result}</div>
    </div>
  );
}

export default Calculator;

