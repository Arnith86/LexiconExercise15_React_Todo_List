import type { FormEvent, ReactElement } from "react";
import { Button } from "./Button";
import type { ITodo } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "./Icon";
import { UserTextInput } from "./TextInput";

interface ITodoCreationFormProp {
  addToDo: (todo: ITodo) => void;
}

/**
 * A controlled form component for creating new todos.
 *
 * ### Behavior
 * - Collects `title`, `description`, and `author` from input fields.
 * - On submit:
 *   - Prevents the default browser form behavior.
 *   - Constructs a new {@link ITodo} object with a unique UUID and timestamp.
 *   - Invokes the `addToDo` callback with the new todo.
 *   - Resets the form fields.
 *
 * ### Fields
 * - **Title**: Required short text input.
 * - **Description**: Required short text input.
 * - **Author**: Optional short text input.
 *
 * @param props - See {@link ITodoCreationFormProp}.
 * @returns A `<form>` element that submits new todos.
 */
export function ToDoCreationForm({
  addToDo,
}: ITodoCreationFormProp): ReactElement {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title-input") as string;
    const content = formData.get("content-input") as string;
    const author = formData.get("author-input") as string;

    const newTodo: ITodo = {
      uuid: uuidv4(),
      title,
      content,
      author,
      completed: false,
      timeStamp: new Date(),
    };

    addToDo(newTodo);
    event.currentTarget.reset();
  }

  return (
    <form className="creation-form" onSubmit={handleSubmit}>
      <UserTextInput namePrefix="title" placeholder="A nifty title.." required>
        Title:
      </UserTextInput>
      <UserTextInput
        namePrefix="content"
        placeholder="What needs to be done?"
        required
      >
        Description:
      </UserTextInput>

      <UserTextInput namePrefix="author" required placeholder="">
        Author:
      </UserTextInput>

      <Button className="g-button add-form-submit-button" buttonType="submit">
        <Icon iconName={"add"} />
      </Button>
    </form>
  );
}
