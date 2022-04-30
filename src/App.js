import CounterProvider from "./stores/counterStore";
import TodosProvider from "./stores/todosStore";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Todos from "./components/Todos";

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
