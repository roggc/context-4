import makeStore from "../utils/makeStore";

const initialState = { todos: [{ text: "todo 1" }] };
const reducer = () => {};

const { useStateContext, ContextProvider } = makeStore(reducer, initialState);

export const useValues = () => {
  const { todos } = useStateContext();
  return { todos };
};

export default ContextProvider;
