import "./css/base.css";
import * as Constants from "./constants";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import { todos } from "./data";
import type { ITodo } from "./types";
import { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./localStorageContainer";
import type { TodoAction } from "./components/TodoItemButtons";

function App() {
  const [todoList, setToDoList] = useState<ITodo[]>([]);

  // Load todo list in local storage
  useEffect(() => {
    const storedItems: ITodo[] = loadFromLocalStorage(Constants.TODO_ITEMS);
    setToDoList(storedItems.length > 0 ? storedItems : todos);
  }, []);

  // Remove if not used !!!
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
    const updatedList: ITodo[] = [...todoList, todo];
    saveList(updatedList);
  }

  function deleteTodo(uuid: string): void {
    const updatedList: ITodo[] = todoList.filter((todo) => todo.uuid !== uuid);
    saveList(updatedList);
  }

  function saveList(updatedList: ITodo[]) {
    setToDoList(updatedList);
    saveToLocalStorage(Constants.TODO_ITEMS, updatedList);
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
