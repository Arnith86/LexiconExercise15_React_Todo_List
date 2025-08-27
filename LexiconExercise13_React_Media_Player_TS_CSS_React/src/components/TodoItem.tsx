import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

type TodoAction = "edit" | "delete" | "up" | "down";

interface ITodoItemProp {
  title: string;
  content: string;
  author?: string;
  completed?: boolean;
  timeStamp: Date;
  //onButtonClick: (uuid: string, action: string) => void;
  onCompleteToggle: () => void;
}

// ToDo: add edit ToDo item functionality
export function TodoItem({
  title,
  content,
  author,
  completed,
  timeStamp,
  onCompleteToggle,
}: ITodoItemProp): ReactElement {
  return (
    <article className="todo-item">
      <h2 className="todo-item-title">{title}</h2>
      <p className="todo-item-content">{content}</p>
      <p className="todo-author">{author}</p>
      <input
        type="checkbox"
        checked={completed ?? false}
        onChange={onCompleteToggle}
      />
      <time dateTime={timeStamp.toISOString()}>
        {timeStamp.toLocaleString()}
      </time>
      <Button className="edit-todo-button" buttonType="button">
        <Icon iconName={"edit"} />
      </Button>
      <Button className="delete-todo-button" buttonType="button">
        <Icon iconName={"delete"} />
      </Button>
    </article>
  );
}
