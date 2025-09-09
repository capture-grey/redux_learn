import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-1 mb-10 ">
      <p className="text-center">{count}</p>
      <div className="Buttons flex gap-3 justify-center">
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={handleIncrement}
        >
          incremnet
        </button>
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={handleDecrement}
        >
          decremnet
        </button>
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
