import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <TodoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}
