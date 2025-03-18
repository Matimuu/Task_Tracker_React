import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";

function TodoForm({ onClick }) {
  const [todoText, setTodoText] = useState("");
  const inputController = (input) => {
    setTodoText(input.target.value);
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter new todo"
          value={todoText}
          onChange={inputController}
        ></input>
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  );

  function handleFormSubmit(event) {
    event.preventDefault();
    onClick(todoText);
    setTodoText("");
  }
}

export default TodoForm;
