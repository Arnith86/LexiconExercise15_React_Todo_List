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

/**
 * TodoItem component
 *
 * Displays a single todo item with its title, content, author, and timestamp.
 * Includes a checkbox to toggle completion state and action buttons
 * (e.g., edit or delete) via the `TodoItemButtons` component.
 *
 * @example
 * ```tsx
 * <TodoItem
 *   uuid="123"
 *   title="Finish project"
 *   content="Work on the final report"
 *   author="Jean-Paul"
 *   completed={false}
 *   timeStamp={new Date()}
 *   onButtonClick={(action, id) => console.log(action, id)}
 *   onCompleteToggle={() => console.log("Toggled completion")}
 * />
 * ```
 *
 * @param {ITodoItemProp} props - The props for the TodoItem component.
 * @returns {ReactElement} A rendered todo item with controls.
 */
export function TodoItem(props: ITodoItemProp): ReactElement {
  const {
    uuid,
    title,
    content,
    author,
    completed,
    timeStamp,
    onButtonClick,
    onCompleteToggle,
  } = props;

  function forwardButtonEvent(action: TodoAction): void {
    onButtonClick(action, uuid);
  }

  // Ensures that timeStamp is a Date object,
  // does not happen automatically when loaded from localStorage.
  const date = timeStamp instanceof Date ? timeStamp : new Date(timeStamp);

  return (
    <article className={`todo-item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed ?? false}
        onChange={onCompleteToggle}
      />
      <span className="information-and-buttons">
        <div className="text-information">
          <h2 className="todo-item-title">{title}</h2>
          <p className="todo-item-content">{content}</p>

          <span className="todo-signature">
            <p className="todo-author">{author}</p>
            <time dateTime={date.toISOString()}>
              {timeStamp.toLocaleString()}
            </time>
          </span>
        </div>
        <TodoItemButtons onButtonClick={forwardButtonEvent} />
      </span>
    </article>
  );
}
