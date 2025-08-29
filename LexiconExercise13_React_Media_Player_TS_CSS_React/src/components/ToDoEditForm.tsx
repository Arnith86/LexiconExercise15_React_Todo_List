import { useState, type FormEvent, type ReactElement } from "react";
import { UserTextInput } from "./TextInput";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { ITodo, TodoAction } from "../types";

interface ITodoEditFormProp {
  todo: ITodo;
  editTodo: (todo: ITodo) => void;
  onButtonClick: (action: TodoAction) => void;
}

/**
 * TodoEditForm component
 *
 * A controlled form for editing an existing todo item.
 * It provides inputs for title and description, and buttons to save or cancel changes.
 *
 * @example
 * ```tsx
 * <TodoEditForm
 *   todo={todo}
 *   editTodo={handleEditTodo}
 *   onButtonClick={(action) => {
 *     if (action === "save") {
 *       console.log("Todo saved!");
 *     } else if (action === "cancel") {
 *       console.log("Edit canceled");
 *     }
 *   }}
 * />
 * ```
 *
 * @param {ITodoEditFormProp} props - The props for the TodoEditForm component.
 * @returns {ReactElement} A form for editing a todo item.
 */
export function TodoEditForm(props: ITodoEditFormProp): ReactElement {
  const { todo, editTodo, onButtonClick } = props;

  const [editableTitle, setEditableTitle] = useState<string>(todo.title);
  const [editableContent, setEditableContent] = useState<string>(todo.content);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const editedTitle = formData.get("title-input") as string;
    const editedContent = formData.get("content-input") as string;

    const editedTodo: ITodo = {
      uuid: todo.uuid,
      title: editedTitle,
      content: editedContent,
      author: todo.author,
      completed: todo.completed,
      timeStamp: new Date(),
    };

    editTodo(editedTodo);
    event.currentTarget.reset();
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <UserTextInput
          namePrefix="title"
          value={editableTitle}
          required
          autoFocus={true}
          onChange={setEditableTitle}
        >
          Title:
        </UserTextInput>
        <UserTextInput
          namePrefix="content"
          value={editableContent}
          required
          onChange={setEditableContent}
        >
          Description:
        </UserTextInput>
      </div>

      <div className="button-row">
        <Button
          className="g-button edit-form-submit-button"
          buttonType="submit"
          onClick={() => onButtonClick("save")}
        >
          <Icon iconName={"save"} />
        </Button>
        <Button
          className="g-button edit-form-cancel-button"
          buttonType="button"
          onClick={() => onButtonClick("cancel")}
        >
          <Icon iconName={"cancel"} />
        </Button>
      </div>
    </form>
  );
}
