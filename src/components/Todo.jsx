import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [num, setNum] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const [editNum, setEditNum] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImagePreview(event.target.files[0]);
    }
  };

  const handleNumChange = (e) => {
    const value = Number(e.target.value);
    if (value <= 100) {
      setNum(value);
    }
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        text: newTodo,
        id: Date.now(),
        image: imagePreview,
        num: Number(num),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      setNum("");
      setImage(null);
      setImagePreview(null);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: editText,
              num: Math.min(Number(editNum), 100),
              image: todo.image,
            }
          : todo
      )
    );
    setEditTodo(null);
    setEditText("");
    setEditNum("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2 w-full"
          placeholder="Enter todo"
        />
        <input
          type="number"
          value={num}
          onChange={handleNumChange}
          className="border p-2 mr-2 w-full"
          placeholder="Enter number (0-100)"
        />
        <input type="file" onChange={onImageChange} className="filetype" />
        {image && <img alt="preview image" src={image} className="mb-4" />}
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Todo</th>
            <th className="border border-gray-300 p-2">Number</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b border-gray-300">
              <td className="p-2">
                {editTodo === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border p-2 w-full"
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td className="p-2">
                {editTodo === todo.id ? (
                  <input
                    type="number"
                    value={editNum}
                    onChange={(e) => setEditNum(e.target.value)}
                    className="border p-2 w-full"
                    max="100"
                  />
                ) : (
                  todo.num
                )}
              </td>
              <td className="p-2">
                {todo.image && (
                  <img
                    alt="todo image"
                    src={URL.createObjectURL(todo.image)}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="p-2 flex space-x-2">
                {editTodo === todo.id ? (
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="bg-green-500 text-white px-4 py-2"
                  >
                    Update
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditTodo(todo.id);
                        setEditText(todo.text);
                        setEditNum(todo.num);
                      }}
                      className="bg-yellow-500 text-white px-4 py-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="bg-red-500 text-white px-4 py-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
