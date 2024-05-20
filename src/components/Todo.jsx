import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [toDoList, setToDoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {toDoList.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
