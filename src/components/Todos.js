import { useEffect } from "react";
import todosStore from "../stores/todosStore";

const { useValues } = todosStore;

const Todos = () => {
  const { todos } = useValues();
  useEffect(() => {
    console.log("Todos rendered");
  });
  return <div>{todos[0].text}</div>;
};

export default Todos;
