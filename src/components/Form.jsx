import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ toDoList, setToDoList }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Add task here..."
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.modernButton} type="submit">
          +
        </button>
      </div>
    </form>
  );
}
