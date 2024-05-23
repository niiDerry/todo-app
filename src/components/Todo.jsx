import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [toDoList, setToDoList] = useState([]);
  const completedTodo = toDoList.filter((todo) => todo.done).length;
  const totalTodos = toDoList.length;

  return (
    <div>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <TodoList toDoList={toDoList} setToDoList={setToDoList} />
      <Footer completedTodo={completedTodo} totalTodos={totalTodos} />
    </div>
  );
}
