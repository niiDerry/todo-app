import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ toDoList, setToDoList }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Add task here..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton} type="submit">
          +
        </button>
      </div>
    </form>
  );
}
