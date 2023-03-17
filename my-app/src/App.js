import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from './taskSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const totalTasks = useSelector((state) => state.tasks.totalTasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ title: inputValue }));
    setInputValue('');
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ id }));
  };

  const handleUpdateTask = (id, title) => {
    dispatch(updateTask({ id, title }));
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <p>Total tasks: {totalTasks}</p
  );
}

export default App;