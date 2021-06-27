import './App.css';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Task list</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
