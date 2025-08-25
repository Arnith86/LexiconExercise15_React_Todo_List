import "./css/base.css";
import * as Constants from "./constants";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import { todos } from "./data";
import type { ITodo } from "./types";
import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "./localStorageContainer";

function App() {
  const [todoList, setToDoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedItems: ITodo[] = loadFromLocalStorage(Constants.TODO_ITEMS);
    setToDoList(storedItems.length > 0 ? storedItems : todos);
  }, []);

  useEffect(() => {}, [todoList]);

  function addTodo(todo: ITodo): void {
    console.log(todo);
    setToDoList((prev) => [...prev, todo]);
  }

  return (
    <main>
      <Header />
      <ToDoCreationForm addToDo={addTodo} />
      <TodoList todos={todoList} />
    </main>
  );
}

export default App;
