import type { ReactElement } from "react";
import { TodoItem } from "./TodoItem";
import type { ITodo } from "../types";

interface ITodoListProp {
  todos: ITodo[];
}

export function TodoList({ todos }: ITodoListProp): ReactElement {
  return (
    <section className="todo-list">
      {todos.map((todoItem) => (
        <TodoItem
          uuid={todoItem.uuid}
          title={todoItem.title}
          content={todoItem.content}
          author={todoItem.author}
          completed={todoItem.completed}
        />
      ))}
    </section>
  );
}
