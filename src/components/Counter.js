import { useEffect } from "react";
import counterStore from "../stores/counterStore";

const { useActions, useValues } = counterStore;

const Counter = () => {
  const { increment, decrement, equal } = useActions();
  const { count } = useValues();
  useEffect(() => {
    console.log("Counter rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
      {count}
    </div>
  );
};

export default Counter;
