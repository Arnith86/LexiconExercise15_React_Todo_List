import type { ReactElement } from "react";
import { TodoItem } from "./TodoItem";
import type { ITodo, TodoAction } from "../types";

interface ITodoListProp {
  todos: ITodo[];
  onToggle: (uuid: string) => void;
  onButtonClick: (action: TodoAction, uuid: string) => void;
}

/**
 * TodoList component
 *
 * Renders a list of `TodoItem` components based on the provided array of todos.
 * Each item is passed its properties, along with event handlers for toggling
 * completion and handling action button clicks.
 *
 * @example
 * ```tsx
 * <TodoList
 *   todos={todos}
 *   onToggle={(uuid) => console.log("Toggled:", uuid)}
 *   onButtonClick={(action, uuid) => console.log("Action:", action, "on", uuid)}
 * />
 * ```
 *
 * @param {ITodoListProp} props - The props for the TodoList component.
 * @returns {ReactElement} A section containing a list of todo items.
 */
export function TodoList(props: ITodoListProp): ReactElement {
  const { todos, onToggle, onButtonClick } = props;

  return (
    <section className="todo-list">
      {todos.map((todoItem) =>
        renderTodoList(todoItem, onToggle, onButtonClick)
      )}
    </section>
  );
}

function renderTodoList(
  todoItem: ITodo,
  onToggle: (uuid: string) => void,
  onButtonClick: (action: TodoAction, uuid: string) => void
) {
  return (
    <TodoItem
      key={todoItem.uuid}
      uuid={todoItem.uuid}
      title={todoItem.title}
      content={todoItem.content}
      author={todoItem.author}
      completed={todoItem.completed}
      timeStamp={todoItem.timeStamp}
      onCompleteToggle={() => onToggle(todoItem.uuid)}
      onButtonClick={onButtonClick}
    />
  );
}
