import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { TodoItemButtons, type TodoAction } from "./TodoItemButtons";

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

// ToDo: add edit ToDo item functionality
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
      <time dateTime={timeStamp.toISOString()}>
        {timeStamp.toLocaleString()}
      </time>
      <TodoItemButtons onButtonClick={forwardButtonEvent} />
    </article>
  );
}
