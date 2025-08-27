import "./css/base.css";
import * as Constants from "./constants";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import { todos } from "./data";
import type { ITodo } from "./types";
import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "./localStorageContainer";
import type { TodoAction } from "./components/TodoItem";

function App() {
  const [todoList, setToDoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedItems: ITodo[] = loadFromLocalStorage(Constants.TODO_ITEMS);
    setToDoList(storedItems.length > 0 ? storedItems : todos);
  }, []);

  useEffect(() => {}, [todoList]);

  function handleTodoItemButtonEvent(action: TodoAction, uuid: string): void {
    switch (action) {
      case "delete":
        deleteTodo(uuid);
        break;

      default:
        break;
    }
  }

  function addTodo(todo: ITodo): void {
    setToDoList((prev) => [...prev, todo]);
    // ToDo: save to storage
  }

  function deleteTodo(uuid: string): void {
    setToDoList((prev) => prev.filter((todo) => todo.uuid !== uuid));
    // ToDo: save to storage
  }

  function handleCompleteToggle(uuid: string): void {
    setToDoList((prev) =>
      // JP comment: New array created, for each todo in array, if uuid matches the todo uuid
      //             spread the contents of todo and flip the completed boolean, else just
      //             return original todo.
      prev.map((todo) =>
        todo.uuid === uuid ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main>
      <Header />
      <ToDoCreationForm addToDo={addTodo} />
      <TodoList
        todos={todoList}
        onToggle={handleCompleteToggle}
        onButtonClick={handleTodoItemButtonEvent}
      />
    </main>
  );
}

export default App;
