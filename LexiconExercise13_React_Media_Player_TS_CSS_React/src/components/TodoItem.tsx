import type { ReactElement } from "react";
import { Button } from "./Button";

type TodoAction = "edit" | "delete" | "up" | "down";

interface ITodoItemProp {
  uuid: string;
  title: string;
  content: string;
  author?: string;
  completed?: boolean;
  timeStamp: Date;
  //onButtonClick: (uuid: string, action: string) => void;
}

// ToDo: add edit ToDo item functionality
export function TodoItem({
  title,
  content,
  author,
  completed,
  timeStamp, // use when edit
}: ITodoItemProp): ReactElement {
  return (
    <article className="todo-item">
      <h2 className="todo-item-title">{title}</h2>
      <p className="todo-item-content">{content}</p>
      <p className="todo-author">{author}</p>
      <input type="checkbox" checked={completed ?? false} />
      <time dateTime={timeStamp.toISOString()}>
        {timeStamp.toLocaleString()}
      </time>
      <Button
        className="edit-todo-button"
        iconName={"edit"}
        buttonType="button"
      />
      <Button
        className="delete-todo-button"
        iconName={"delete"}
        buttonType="button"
      />
    </article>
  );
}
