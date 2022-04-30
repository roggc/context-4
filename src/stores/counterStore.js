import makeStore from "../utils/makeStore";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const makeCounterStore = (reducer, initialState) => {
  const { useDispatchContext, useStateContext, ContextProvider } = makeStore(
    reducer,
    initialState
  );
  const useActions = () => {
    const dispatch = useDispatchContext();
    const increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });
    const equal = () => dispatch({ type: EQUAL });
    return { increment, decrement, equal };
  };
  const useValues = () => {
    const { count } = useStateContext();
    return { count };
  };
  return { ContextProvider, useActions, useValues };
};

const initialState = { count: 0 };
const reducer = (draft, action) => {
  switch (action.type) {
    case INCREMENT:
      draft.count += 1;
      break;
    case DECREMENT:
      draft.count -= 1;
      break;
    case EQUAL:
      draft.count = draft.count + 1 - 1;
      break;
    default:
      break;
  }
};

export default makeCounterStore(reducer, initialState);
