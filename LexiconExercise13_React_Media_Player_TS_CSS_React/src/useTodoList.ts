import { useEffect, useState } from "react";
import * as Constants from "./constants";
import type { ITodo, SortType } from "./types";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./localStorageContainer";
import { todos } from "./data";

type UseTodoListReturn = {
  todoList: ITodo[];
  editableTodo: ITodo | null;
  actions: {
    addTodo: (todo: ITodo) => void;
    deleteTodo: (uuid: string) => void;
    handleCompleteToggle: (uuid: string) => void;
    editTodo: (editedTodo: ITodo) => void;
    handleEditTodo: (uuid: string) => void;
    cancelEdit: () => void;
    sortList: (sortType: SortType) => void;
    moveItem: (direction: number, uuid: string) => void;
  };
};

/**
 * useTodoList hook
 *
 * Manages a todo list with CRUD operations, editing state, sorting,
 * and persistence in localStorage. Initializes from localStorage if
 * available, otherwise uses default `todos` from `./data`.
 *
 * @example
 * ```tsx
 * const { todoList, editableTodo, actions } = useTodoList();
 *
 * actions.addTodo({
 *   uuid: "123",
 *   title: "New Task",
 *   content: "Task details",
 *   author: "Jean-Paul",
 *   completed: false,
 *   timeStamp: new Date(),
 * });
 *
 * actions.handleCompleteToggle("123");
 * actions.sortList("date");
 * ```
 *
 * @returns {UseTodoListReturn} The current todo list, the editable todo, and a set of actions.
 */
export function useTodoList(): UseTodoListReturn {
  const [todoList, setToDoList] = useState<ITodo[]>([]);
  const [editableTodo, setEditableTodo] = useState<ITodo | null>(null);

  //Load todo list in local storage
  useEffect(() => {
    const storedItems: ITodo[] = loadFromLocalStorage(Constants.TODO_ITEMS);
    setToDoList(storedItems.length > 0 ? storedItems : todos);
  }, []);

  useEffect(() => {
    saveToLocalStorage(Constants.TODO_ITEMS, todoList);
  }, [todoList]);

  function addTodo(todo: ITodo): void {
    const updatedList: ITodo[] = [todo, ...todoList];
    setToDoList(updatedList);
  }

  function deleteTodo(uuid: string): void {
    const updatedList: ITodo[] = todoList.filter((todo) => todo.uuid !== uuid);
    setToDoList(updatedList);
  }

  function handleCompleteToggle(uuid: string): void {
    // JP comment: New array created, for each todo in array, if uuid matches the todo uuid
    //             spread the contents of todo and flip the completed boolean, else just
    //             return original todo.
    const updatedList: ITodo[] = todoList.map((todo) =>
      todo.uuid === uuid ? { ...todo, completed: !todo.completed } : todo
    );

    setToDoList(updatedList);
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

      setToDoList(updatedList);
      return updatedList;
    });
    setEditableTodo(null);
  }

  function cancelEdit(): void {
    setEditableTodo(null);
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

      setToDoList(updatedList);
      return updatedList;
    });
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

    setToDoList(updatedList);
  }

  return {
    todoList,
    editableTodo,
    actions: {
      addTodo,
      deleteTodo,
      handleCompleteToggle,
      editTodo,
      handleEditTodo,
      cancelEdit,
      moveItem,
      sortList,
    },
  };
}
