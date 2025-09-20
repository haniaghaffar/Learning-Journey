import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/timerslice";

export default function App() {
  const handleBtn = useDispatch();
  

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Redux Timer</h1>

        <div className="text-5xl font-mono text-gray-900 border-2 border-gray-300 rounded-xl py-6 mb-8">
          {useSelector((state) => state.timer.value)}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => handleBtn(increment())}
            className="flex-1 mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg 
                       hover:bg-blue-600 transition font-medium"
          >
            Increment
          </button>
          <button
            onClick={() => handleBtn(decrement())}
            className="flex-1 ml-2 px-4 py-2 bg-orange-500 text-white rounded-lg 
                       hover:bg-orange-600 transition font-medium"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
