import "./css/base.css";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";

function App() {
  return (
    <main>
      <Header />
      <ToDoCreationForm />
    </main>
  );
}

export default App;
