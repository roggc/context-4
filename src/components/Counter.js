import { useEffect } from "react";
import {useValues,useActions} from "../stores/counterStore";

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
