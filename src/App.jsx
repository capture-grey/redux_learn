import { useState } from "react";
import Stats from "./components/Stats";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counters/countersSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (countersId) => {
    dispatch(increment(countersId));
  };
  const handleDecrement = (countersId) => {
    dispatch(decrement(countersId));
  };
  const handleReset = (countersId) => {
    dispatch(reset(countersId));
  };

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);
  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => {
            handleIncrement(counter.id);
          }}
          onDecrement={() => {
            handleDecrement(counter.id);
          }}
          onReset={() => {
            handleReset(counter.id);
          }}
        />
      ))}
      <Stats totalCount={totalCount} />
    </>
  );
}

export default App;
