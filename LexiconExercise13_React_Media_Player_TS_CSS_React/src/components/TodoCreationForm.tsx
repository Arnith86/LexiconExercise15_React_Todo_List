import type { FormEvent, ReactElement } from "react";
import { Button } from "./Button";
import type { ITodo } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "./Icon";

interface ITodoCreationFormProp {
  addToDo: (todo: ITodo) => void;
}

export function ToDoCreationForm({
  addToDo,
}: ITodoCreationFormProp): ReactElement {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("todo-title-input") as string;
    const content = formData.get("todo-content-input") as string;
    const author = formData.get("todo-content-input") as string;

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
    <form className="todo-creation-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-title-input">Title: </label>
      <input
        type="text"
        required
        className="todo-title-text-input"
        name="todo-title-input"
        placeholder="A nifty title.."
      />
      <label htmlFor="todo-content-input">Description: </label>
      <input
        type="text"
        required
        className="todo-content-text-input"
        name="todo-content-input"
        placeholder="What needs to be done?"
      />
      <label htmlFor="todo-author-input">Author: </label>
      <input
        type="text"
        className="todo-author-text-input"
        name="todo-author-input"
      />
      <Button className="g-button todo-form-submit-button" buttonType="submit">
        <Icon iconName={"add"} />
      </Button>{" "}
    </form>
  );
}
