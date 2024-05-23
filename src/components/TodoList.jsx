import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ toDoList, setToDoList }) {
  const sortedTodoList = toDoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.tasks}>
      {sortedTodoList.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      ))}
    </div>
  );
}
