import counterStore from "./stores/counterStore";
import todosStore from "./stores/todosStore";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Todos from "./components/Todos";

const { ContextProvider: CounterProvider } = counterStore;
const { ContextProvider: TodosProvider } = todosStore;

function App() {
  return (
    <CounterProvider>
      <TodosProvider>
        <Counter />
        <CounterActions />
        <Todos />
      </TodosProvider>
    </CounterProvider>
  );
}

export default App;
