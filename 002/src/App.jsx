import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4"> To-Do List</h1>
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
          className="flex-grow border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

