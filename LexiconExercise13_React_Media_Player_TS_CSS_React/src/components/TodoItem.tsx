import type { ReactElement } from "react";
import type { TodoAction } from "../types";
import { TodoItemButtons } from "./TodoItemButtons";

interface ITodoItemProp {
  uuid: string;
  title: string;
  content: string;
  author?: string;
  completed?: boolean;
  timeStamp: Date;
  onButtonClick: (action: TodoAction, uuid: string) => void;
  onCompleteToggle: () => void;
}

export function TodoItem({
  uuid,
  title,
  content,
  author,
  completed,
  timeStamp,
  onButtonClick,
  onCompleteToggle,
}: ITodoItemProp): ReactElement {
  function forwardButtonEvent(action: TodoAction): void {
    onButtonClick(action, uuid);
  }

  // Ensures that timeStamp is a Date object,
  // does not happen automatically when loaded from localStorage.
  const date = timeStamp instanceof Date ? timeStamp : new Date(timeStamp);

  return (
    <article className="todo-item">
      <input
        type="checkbox"
        checked={completed ?? false}
        onChange={onCompleteToggle}
      />
      <h2 className="todo-item-title">{title}</h2>
      <p className="todo-item-content">{content}</p>
      <p className="todo-author">{author}</p>
      <time dateTime={date.toISOString()}>{timeStamp.toLocaleString()}</time>
      <TodoItemButtons onButtonClick={forwardButtonEvent} />
    </article>
  );
}
