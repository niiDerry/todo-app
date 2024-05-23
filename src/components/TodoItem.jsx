import styles from "./todoItem.module.css";

export default function TodoItem({ item, toDoList, setToDoList }) {
  function handleDelete(item) {
    setToDoList(toDoList.filter((toDo) => toDo !== item));
  }

  function handleClick(name) {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.name === name ? { ...toDo, done: !toDo.done } : toDo
      )
    );
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
