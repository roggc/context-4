import { useEffect } from "react";
import counterStore from "../stores/counterStore";

const { useActions } = counterStore;

const CounterActions = () => {
  const { increment, decrement, equal } = useActions();
  useEffect(() => {
    console.log("CounterActions rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
    </div>
  );
};

export default CounterActions;
