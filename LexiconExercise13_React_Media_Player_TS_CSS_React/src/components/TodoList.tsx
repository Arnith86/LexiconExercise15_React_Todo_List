import type { ReactElement } from "react";
import { TodoItem } from "./TodoItem";
import type { ITodo } from "../types";

interface ITodoListProp {
  todos: ITodo[];
  onToggle: (uuid: string) => void;
}

export function TodoList({ todos, onToggle }: ITodoListProp): ReactElement {
  return (
    <section className="todo-list">
      {todos.map((todoItem) => renderTodoList(todoItem, onToggle))}
    </section>
  );
}

function renderTodoList(todoItem: ITodo, onToggle: (uuid: string) => void) {
  return (
    <TodoItem
      key={todoItem.uuid}
      title={todoItem.title}
      content={todoItem.content}
      author={todoItem.author}
      completed={todoItem.completed}
      timeStamp={todoItem.timeStamp}
      onCompleteToggle={() => onToggle(todoItem.uuid)}
    />
  );
}
