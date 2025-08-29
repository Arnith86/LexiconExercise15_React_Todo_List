import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { TodoAction } from "../types";

interface ITodoActionButtonsProp {
  onButtonClick: (action: TodoAction) => void;
}

/**
 * TodoItemButtons component
 *
 * Renders the action buttons for a todo item, including edit, delete,
 * move up, and move down. Each button passes a specific action
 * back to the parent component via `onButtonClick`.
 *
 * @param {ITodoActionButtonsProp} props - The props for the TodoItemButtons component.
 * @returns {ReactElement} A group of action buttons for a todo item.
 */
export function TodoItemButtons(props: ITodoActionButtonsProp): ReactElement {
  const { onButtonClick } = props;

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
