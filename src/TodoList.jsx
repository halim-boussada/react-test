import { useState } from "react";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { text: "learn react", completed: true },
  ]);
  function AddTodo() {
    setTodos([...todos, { text: inputValue, completed: false }]);
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
          <TodoItem
            todo={todo}
            ToggleStatus={ToggleStatus}
            DeleteTodo={DeleteTodo}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
