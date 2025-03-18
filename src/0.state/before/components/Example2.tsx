import { useState } from 'react';
import styles from './Example.module.css';

function Example2() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn JS', isCompleted: true },
    { id: 2, title: 'Learn React', isCompleted: false },
    { id: 3, title: 'Learn NodeJS', isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  // Add Todo
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now(), title: newTodo, isCompleted: false },
    ]);
    setNewTodo('');
  };

  // Remove Todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle isCompleted
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2>Todo List</h2>
      <div className={styles.inputGroup}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new task...'
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.addButton}>
          Add
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <span
              className={todo.isCompleted ? styles.completed : ''}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example2;
