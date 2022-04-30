import makeStore from "../utils/makeStore";

const initialState = { count: 0 };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

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

const { useDispatchContext, useStateContext, ContextProvider } = makeStore(
  reducer,
  initialState
);

export const useActions = () => {
  const dispatch = useDispatchContext();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  return { increment, decrement, equal };
};

export const useValues = () => {
  const state = useStateContext();
  return state;
};

export default ContextProvider;
