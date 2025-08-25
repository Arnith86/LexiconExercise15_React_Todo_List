import "./css/base.css";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import { todos } from "./data";

function App() {
  return (
    <main>
      <Header />
      <ToDoCreationForm />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
