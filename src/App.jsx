import { useState } from "react";
import Stats from "./components/Stats";
import Counter from "./components/Counter";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);
  const handleIncrement = (countersId) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === countersId
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };
  const handleDecrement = (countersId) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === countersId
          ? { ...counter, value: counter.value - 1 }
          : counter
      )
    );
  };
  const handleReset = (countersId) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === countersId ? { ...counter, value: 0 } : counter
      )
    );
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
