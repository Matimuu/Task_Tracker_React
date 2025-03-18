import { IoReloadCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import styles from "./TodosActions.module.css";
import Button from "../UI/Button";

function TodosActions({
  completedTodosExist,
  deleteCompleted,
  resetTodosHandler,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodosHandler}>
        <IoReloadCircle />{" "}
      </Button>

      <Button
        title="Delete all finished tasks"
        onClick={deleteCompleted}
        disabled={!completedTodosExist}
      >
        <MdDeleteForever />
      </Button>
    </div>
  );
}
export default TodosActions;
