import { useState } from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todoList, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {todoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
