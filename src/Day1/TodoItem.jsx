function TodoItem({ todo, ToggleStatus, DeleteTodo, index }) {
  return (
    <li>
      {todo.text} / status : {todo.completed ? "completed" : "not completed"}
      <button onClick={() => ToggleStatus(index)}>toggle</button>{" "}
      <button onClick={() => DeleteTodo(index)}>delete</button>
    </li>
  );
}

export default TodoItem;
