import type { ReactElement } from "react";
import { Button } from "./Button";

export function ToDoCreationForm(): ReactElement {
  return (
    <form className="todo-creation-form">
      <label htmlFor="todo-title-input">Title: </label>
      <input
        type="text"
        required
        className="todo-title-text-input"
        id="todo-title-input"
        placeholder="A nifty title.."
      />

      <label htmlFor="todo-content-input">Description: </label>
      <input
        type="text"
        required
        className="todo-content-text-input"
        id="todo-content-input"
        placeholder="What needs to be done?"
      />

      <label htmlFor="todo-author-input">Author: </label>
      <input
        type="text"
        className="todo-author-text-input"
        id="todo-author-input"
      />

      <Button
        className="g-button todo-form-submit-button"
        iconName={"add"}
        buttonType="submit"
      />
    </form>
  );
}
