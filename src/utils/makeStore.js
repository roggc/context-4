import { createContext, useContext as useContext_ } from "react";
import { useImmerReducer } from "use-immer";

const makeStore = (reducer, initialState) => {
  const stateContext = createContext(initialState);
  const dispatchContext = createContext();

  const useStateContext = () => useContext_(stateContext);
  const useDispatchContext = () => useContext_(dispatchContext);

  const ContextProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);
    return (
      <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>
          {children}
        </dispatchContext.Provider>
      </stateContext.Provider>
    );
  };
  return { useStateContext, useDispatchContext, ContextProvider };
};

export default makeStore;
