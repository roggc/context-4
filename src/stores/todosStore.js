import makeStore from "../utils/makeStore";

const makeTodosStore = (reducer, initialState) => {
  const { useStateContext, ContextProvider } = makeStore(reducer, initialState);

  const useValues = () => {
    const { todos } = useStateContext();
    return { todos };
  };
  return { ContextProvider, useValues };
};

const initialState = { todos: [{ text: "todo 1" }] };
const reducer = () => {};

export default makeTodosStore(reducer, initialState);
