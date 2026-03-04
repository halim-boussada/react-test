import { useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";

const NewTodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useLocalStorage("todolist" , [])

  function AddTodo() {
    const newTodos = [...todos];
    newTodos.push({ text: inputValue, completed: false })
    setTodos(newTodos);
    setInputValue("");
  }
  function ToggleStatus(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  function DeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo.text} / status :{" "}
            {todo.completed ? "completed" : "not completed"}
            <button onClick={() => ToggleStatus(index)}>toggle</button>{" "}
            <button onClick={() => DeleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewTodoList;
