import { useState } from 'react';
import '../css/Todo.css';

export default function Todo({}) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To Do</h1>

      <div className="input-group">
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Yeni görev..."
        />
        <button onClick={handleAdd}>Ekle</button>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
}