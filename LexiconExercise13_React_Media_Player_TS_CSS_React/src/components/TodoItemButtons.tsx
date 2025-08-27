import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function TodoItemButtons(): ReactElement {
  return (
    <div className="todo-item-Buttons">
      <Button className="edit-todo-button" buttonType="button">
        <Icon iconName={"edit"} />
      </Button>
      <Button className="delete-todo-button" buttonType="button">
        <Icon iconName={"delete"} />
      </Button>
      <Button className="move-upp-button" buttonType="button">
        <Icon iconName={"keyboard_arrow_up"} />
      </Button>
      <Button className="move-down-button" buttonType="button">
        <Icon iconName={"keyboard_arrow_down"} />
      </Button>
    </div>
  );
}
