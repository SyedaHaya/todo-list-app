import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const editTask = (ind) => {
    const update = prompt('Enter a new value');
    if (update !== null) {
      const updatedList = [...todoList];
      updatedList[ind] = update;
      setTodoList(updatedList);
    }
  };

  const removeTask = (ind) => {
    const updatedList = [...todoList];
    updatedList.splice(ind, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='card-1'>
        <input className='card'
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='card2' onClick={addTask}>Add</button>
      </div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button className='card3' onClick={() => editTask(index)}>Edit</button>
            <button className='card4' onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
