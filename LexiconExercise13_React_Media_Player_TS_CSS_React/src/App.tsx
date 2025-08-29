import "./css/style.css";
import * as Constants from "./constants";
import { Header } from "./components/Header";
import { ToDoCreationForm } from "./components/TodoCreationForm";
import { TodoList } from "./components/TodoList";
import type { TodoAction } from "./types";

import { TodoEditForm } from "./components/ToDoEditForm";
import { SortSection } from "./components/SortActionButtons";
import { useTodoList } from "./useTodoList";

function App() {
  const todos = useTodoList();

  function handleTodoItemButtonEvent(action: TodoAction, uuid?: string): void {
    switch (action) {
      case "delete":
        todos.actions.deleteTodo(uuid!);
        break;
      case "edit":
        todos.actions.handleEditTodo(uuid!);
        break;
      case "up":
        todos.actions.moveItem(Constants.TODO_MOVE_UP, uuid!);
        break;
      case "down":
        todos.actions.moveItem(Constants.TODO_MOVE_DOWN, uuid!);
        break;
      case "cancel":
        todos.actions.cancelEdit();
        break;
      case "sort-alphabetically":
        todos.actions.sortList("alphabetically");
        break;
      case "sort-date":
        todos.actions.sortList("date");
        break;

      default:
        break;
    }
  }

  function renderForm() {
    if (todos.editableTodo)
      return (
        <TodoEditForm
          todo={todos.editableTodo}
          editTodo={todos.actions.editTodo}
          onButtonClick={handleTodoItemButtonEvent}
        />
      );
    return <ToDoCreationForm addToDo={todos.actions.addTodo} />;
  }

  return (
    <main>
      <Header />
      {renderForm()}
      <SortSection onButtonClick={handleTodoItemButtonEvent} />
      <TodoList
        todos={todos.todoList}
        onToggle={todos.actions.handleCompleteToggle}
        onButtonClick={handleTodoItemButtonEvent}
      />
    </main>
  );
}

export default App;
