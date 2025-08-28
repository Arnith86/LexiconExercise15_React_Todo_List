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

export function TodoEditForm({
  todo,
  editTodo,
  onButtonClick,
}: ITodoEditFormProp): ReactElement {
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
    <form className="todo-edit-form" onSubmit={handleSubmit}>
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
