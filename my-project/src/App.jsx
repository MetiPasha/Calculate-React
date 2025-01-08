import { useState } from "react";
import "./index.css";

function App() {
  const [inputNum, setInputNum] = useState("");
  const [storedValue, setStoredValue] = useState(null);
  const [oprator, setOprator] = useState(null);

  const digitHandeler = (value) => {
    setInputNum((i) => i + value);
  };
  const delHandeler = () => {
    setInputNum((i) => i.slice(0, -1));
  };

  const percentHandeler = () => {
    if (!inputNum) return;
    setInputNum((i) => (+i / 100).toString());
  };

  const opratorHandeler = (op) => {
    if (!inputNum) return;
    setStoredValue(inputNum);
    setInputNum("");
    setOprator(op);
  };

  const calculator = () => {
    if (!inputNum || !storedValue || oprator === null) return;
    const currentNum = +inputNum;
    const storedNum = +storedValue;
    let result;

    switch (oprator) {
      case "+":
        result = storedNum + currentNum;
        break;
      case "-":
        result = storedNum - currentNum;
        break;
      case "x":
        result = storedNum * currentNum;
        break;
      case "/":
        result = currentNum !== 0 ? storedNum / currentNum : "Error";
        break;
      default:
        return;
    }

    setInputNum(result.toString());
    setStoredValue(null);
    setOprator(null);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <input
            className="  w-full p-4 text-2xl text-left border-2 bg-green-800 rounded-lg mb-4 "
            type="text"
            placeholder="0"
            value={inputNum}
            readOnly
          />

          <div className="  grid grid-cols-4 gap-1">
            <button className=" p-4 rounded-lg text-xl hover:bg-orange-300 bg-orange-400 ">
              AC
            </button>
            <button
              onClick={() => setInputNum("")}
              className=" p-4 rounded-lg text-xl hover:bg-orange-300 bg-orange-400"
            >
              C
            </button>
            <button
              onClick={delHandeler}
              className=" p-4 rounded-lg text-xl  hover:bg-red-300 bg-red-400"
            >
              DEL
            </button>
            <button
              onClick={() => opratorHandeler("/")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              /
            </button>
            <button
              onClick={() => digitHandeler("1")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              1
            </button>
            <button
              onClick={() => digitHandeler("2")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              2
            </button>
            <button
              onClick={() => digitHandeler("3")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              3
            </button>
            <button
              onClick={() => opratorHandeler("x")}
              className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400"
            >
              x
            </button>
            <button
              onClick={() => digitHandeler("4")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              4
            </button>
            <button
              onClick={() => digitHandeler("5")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              5
            </button>
            <button
              onClick={() => digitHandeler("6")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              6
            </button>
            <button
              onClick={() => opratorHandeler("+")}
              className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400"
            >
              +
            </button>
            <button
              onClick={() => digitHandeler("7")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              7
            </button>
            <button
              onClick={() => digitHandeler("8")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              8
            </button>
            <button
              onClick={() => digitHandeler("9")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              9
            </button>
            <button
              onClick={() => opratorHandeler("-")}
              className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400"
            >
              -
            </button>
            <button
              onClick={() => digitHandeler(".")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              .
            </button>
            <button
              onClick={() => digitHandeler("0")}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              0
            </button>
            <button
              onClick={percentHandeler}
              className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400"
            >
              %
            </button>
            <button
              onClick={calculator}
              className=" p-4 rounded-lg text-xl hover:bg-blue-300 bg-blue-400"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
