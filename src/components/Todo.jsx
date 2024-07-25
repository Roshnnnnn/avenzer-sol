import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditTodo(null);
    setEditText("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ">Todo App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2 w-full"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            {editTodo === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-2 w-full"
                />
                <button
                  onClick={() => updateTodo(todo.id)}
                  className="bg-green-500 text-white px-4 py-2"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditTodo(todo.id);
                      setEditText(todo.text);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
