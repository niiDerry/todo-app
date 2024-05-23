import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ toDoList, setToDoList }) {
  return (
    <div className={styles.tasks}>
      {toDoList.map((item) => (
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
