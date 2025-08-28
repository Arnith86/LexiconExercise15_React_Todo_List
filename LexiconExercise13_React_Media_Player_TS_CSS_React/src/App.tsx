import "./css/base.css";
import * as Constants from "./constants";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import { todos } from "./data";
import type { ITodo, SortType, TodoAction } from "./types";
import { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./localStorageContainer";

import { TodoEditForm } from "./components/ToDoEditForm";
import { SortSection } from "./components/SortActionButtons";

function App() {
  const [todoList, setToDoList] = useState<ITodo[]>([]);
  const [editableToDo, setEditableTodo] = useState<ITodo | null>(null);

  // Load todo list in local storage
  useEffect(() => {
    const storedItems: ITodo[] = loadFromLocalStorage(Constants.TODO_ITEMS);
    setToDoList(storedItems.length > 0 ? storedItems : todos);
  }, []);

  function handleTodoItemButtonEvent(action: TodoAction, uuid?: string): void {
    switch (action) {
      case "delete":
        deleteTodo(uuid!);
        break;
      case "edit":
        handleEditTodo(uuid!);
        break;
      case "up":
        moveItem(Constants.TODO_MOVE_UP, uuid!);
        break;
      case "down":
        moveItem(Constants.TODO_MOVE_DOWN, uuid!);
        break;
      case "cancel":
        cancelEdit();
        break;
      case "sort-alphabetically":
        sortList("alphabetically");
        break;
      case "sort-date":
        sortList("date");
        break;

      default:
        break;
    }
  }

  function sortList(sortType: SortType) {
    setToDoList((prev) => {
      const updatedList = [...prev];

      updatedList.sort((a, b) => {
        if (sortType === "alphabetically") {
          const nameA = a.author.toLowerCase();
          const nameB = b.author.toLowerCase();

          return nameA.localeCompare(nameB);
        } else if (sortType === "date") {
          const dateA = new Date(a.timeStamp);
          const dateB = new Date(b.timeStamp!);

          return dateB.getTime() - dateA.getTime(); // newest first
        }

        return 0;
      });

      return updatedList;
    });
  }

  function addTodo(todo: ITodo): void {
    const updatedList: ITodo[] = [...todoList, todo];
    saveList(updatedList);
  }

  function handleEditTodo(uuid: string): void {
    const todo = todoList.find((t) => t.uuid === uuid);
    if (todo) setEditableTodo({ ...todo });
  }

  function editTodo(editedTodo: ITodo) {
    setToDoList((prev) => {
      const todoIndex: number = prev.findIndex(
        (t) => t.uuid === editedTodo.uuid
      );
      const updatedList = [...prev];

      updatedList[todoIndex] = editedTodo;

      saveList(updatedList);

      return updatedList;
    });
  }

  function cancelEdit(): void {
    setEditableTodo(null);
  }
  function deleteTodo(uuid: string): void {
    const updatedList: ITodo[] = todoList.filter((todo) => todo.uuid !== uuid);
    saveList(updatedList);
  }

  function moveItem(direction: number, uuid: string): void {
    const originalIndex: number = todoList.findIndex(
      (todo) => todo.uuid === uuid
    );

    const nextIndex = originalIndex + direction;
    if (nextIndex < 0 || nextIndex > todoList.length - 1) return;

    const updatedList = [...todoList];

    // Switch places of two elements in an array using deconstruction.
    [updatedList[originalIndex], updatedList[nextIndex]] = [
      updatedList[nextIndex],
      updatedList[originalIndex],
    ];

    saveList(updatedList);
  }

  function saveList(updatedList: ITodo[]) {
    setToDoList(updatedList);
    saveToLocalStorage(Constants.TODO_ITEMS, updatedList);
  }

  function handleCompleteToggle(uuid: string): void {
    // JP comment: New array created, for each todo in array, if uuid matches the todo uuid
    //             spread the contents of todo and flip the completed boolean, else just
    //             return original todo.
    const updatedList: ITodo[] = todoList.map((todo) =>
      todo.uuid === uuid ? { ...todo, completed: !todo.completed } : todo
    );

    saveList(updatedList);
  }
  function renderForm() {
    if (editableToDo)
      return (
        <TodoEditForm
          todo={editableToDo}
          editTodo={editTodo}
          onButtonClick={handleTodoItemButtonEvent}
        />
      );
    return <ToDoCreationForm addToDo={addTodo} />;
  }

  return (
    <main>
      <Header />
      {renderForm()}
      <SortSection onButtonClick={handleTodoItemButtonEvent} />
      <TodoList
        todos={todoList}
        onToggle={handleCompleteToggle}
        onButtonClick={handleTodoItemButtonEvent}
      />
    </main>
  );
}

export default App;
