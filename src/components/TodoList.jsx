import TodoItem from "./TodoItem";

export default function TodoList({ toDoList }) {
  return (
    <div>
      {toDoList.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
