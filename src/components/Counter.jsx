import React, { useState } from "react";

function Counter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div className="counter-1 mb-10 ">
      <p className="text-center">{count}</p>
      <div className="Buttons flex gap-3 justify-center">
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={onIncrement}
        >
          incremnet
        </button>
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={onDecrement}
        >
          decremnet
        </button>
        <button
          className="border border-amber-700 p-1 rounded-xl cursor-pointer"
          onClick={onReset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
