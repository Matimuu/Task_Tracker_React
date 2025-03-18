import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todoList, setTodoList] = useState([]);
  const completedTodosCount = todoList.filter(
    (todo) => todo.isCompleted
  ).length;

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm onClick={addTodoHandler} />
      {todoList.length ? (
        <>
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            deleteCompleted={deleteAllFinishedHandler}
            resetTodosHandler={resetTodosHandler}
          />
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleStateHandler}
          />
        </>
      ) : (
        <h3>There is nothing to do</h3>
      )}
      {!!completedTodosCount && (
        <h3>
          You finished {completedTodosCount}
          {completedTodosCount > 1 ? " tasks" : " task"}
        </h3>
      )}
    </div>
  );

  function addTodoHandler(todoText) {
    const newTodo = {
      text: todoText,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodoList([newTodo, ...todoList]);
  }

  function deleteTodoHandler(id) {
    setTodoList(todoList.filter((value) => value.id !== id));
  }

  function toggleStateHandler(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function deleteAllFinishedHandler() {
    setTodoList(todoList.filter((todo) => !todo.isCompleted));
  }
  function resetTodosHandler() {
    setTodoList([]);
  }
}

export default App;
