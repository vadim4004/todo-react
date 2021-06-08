import './App.css';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userValue) => {
    if (userValue) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        isDone: false,
        task: userValue,
      };

      setTodos([newTask, ...todos]);
    }
    console.log(userValue);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const completeTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <h1>Task list: {todos.length}</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        todos={todos}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
