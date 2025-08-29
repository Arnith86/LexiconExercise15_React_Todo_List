import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { TodoAction } from "../types";

// export type TodoAction = "edit" | "delete" | "up" | "down" | "completed";

interface ITodoActionButtonsProp {
  onButtonClick: (action: TodoAction) => void;
}

export function TodoItemButtons({
  onButtonClick,
}: ITodoActionButtonsProp): ReactElement {
  return (
    <div className="todo-item-Buttons">
      <span className="top-buttons">
        <Button
          className="edit-todo-button"
          buttonType="button"
          onClick={() => onButtonClick("edit")}
        >
          <Icon iconName={"edit"} />
        </Button>

        <Button
          className="delete-todo-button"
          buttonType="button"
          onClick={() => onButtonClick("delete")}
        >
          <Icon iconName={"delete"} />
        </Button>
      </span>
      <span className="bottom-buttons">
        <Button
          className="move-up-button"
          buttonType="button"
          onClick={() => onButtonClick("up")}
        >
          <Icon iconName={"keyboard_arrow_up"} />
        </Button>

        <Button
          className="move-down-button"
          buttonType="button"
          onClick={() => onButtonClick("down")}
        >
          <Icon iconName={"keyboard_arrow_down"} />
        </Button>
      </span>
    </div>
  );
}
