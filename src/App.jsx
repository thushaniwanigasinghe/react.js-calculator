import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8081/api/calculator";

export default function App() {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API_BASE}/history`);
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCalculate = async () => {
    if (!valueOne || !valueTwo || !operation) return;
    try {
      const res = await axios.post(`${API_BASE}/calculate`, {
        valueOne: parseFloat(valueOne),
        valueTwo: parseFloat(valueTwo),
        operation,
      });
      setResult(res.data.result);
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClear = () => {
    setValueOne("");
    setValueTwo("");
    setOperation(null);
    setResult(null);
  };

  const handleBackspace = () => {
    if (valueTwo) setValueTwo(valueTwo.slice(0, -1));
    else if (operation) setOperation(null);
    else if (valueOne) setValueOne(valueOne.slice(0, -1));
  };

  const handleNumberClick = (num) => {
    if (!operation) setValueOne((prev) => prev + num);
    else setValueTwo((prev) => prev + num);
  };

  const handleOperationClick = (op) => {
    if (valueOne) setOperation(op);
  };

  const handleDeleteHistory = async (id) => {
    try {
      await axios.delete(`${API_BASE}/history/${id}`);
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen zinc-900">
      <div className="bg-black border border-black text-white p-6 rounded-2xl shadow-2xl w-full max-w-sm">
        {/* Title */}
        <h1 className="text-center text-3xl font-extrabold mb-6 tracking-wide">
          Calculator
        </h1>

        {/* Display */}
        <div className="bg-zinc-800 p-4 rounded-xl text-right text-lg mb-5 min-h-[70px] flex flex-col justify-center shadow-inner">
          <div className="text-gray-400">
            {valueOne} {operation} {valueTwo}
          </div>
          {result !== null && (
            <div className="text-2xl font-bold text-white mt-1">
              = {result}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl font-bold"
          >
            AC
          </button>
          <button
            onClick={handleBackspace}
            className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl font-bold"
          >
            ⌫
          </button>
          <button
            onClick={() => handleOperationClick("%")}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            %
          </button>
          <button
            onClick={() => handleOperationClick("/")}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            ÷
          </button>

          {[7, 8, 9].map((n) => (
            <button
              key={n}
              onClick={() => handleNumberClick(n.toString())}
              className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOperationClick("*")}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            ×
          </button>

          {[4, 5, 6].map((n) => (
            <button
              key={n}
              onClick={() => handleNumberClick(n.toString())}
              className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOperationClick("-")}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            -
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => handleNumberClick(n.toString())}
              className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOperationClick("+")}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            +
          </button>

          <button
            onClick={() => handleNumberClick("0")}
            className="col-span-2 bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl"
          >
            0
          </button>
          <button
            onClick={() => handleNumberClick(".")}
            className="bg-zinc-700 hover:bg-zinc-600 transition p-3 rounded-xl"
          >
            .
          </button>
          <button
            onClick={handleCalculate}
            className="bg-white text-black hover:bg-gray-300 transition font-bold p-3 rounded-xl"
          >
            =
          </button>
        </div>

        {/* History Toggle */}
        <button
          className="mt-5 w-full bg-zinc-800 hover:bg-zinc-700 transition p-2 rounded-xl font-semibold"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {/* History */}
        {showHistory && (
          <div className="mt-4 bg-zinc-800 p-3 rounded-xl max-h-40 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
            {history.map((h) => (
              <div
                key={h.id}
                className="flex justify-between items-center py-1 border-b border-zinc-700"
              >
                <span className="text-gray-300">
                  {h.valueOne} {h.operation} {h.valueTwo} = {h.result}
                </span>
                <button
                  onClick={() => handleDeleteHistory(h.id)}
                  className="bg-zinc-700 hover:bg-red-600 transition text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
