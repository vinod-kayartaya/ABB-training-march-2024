import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const subitHandler = (e) => {
    e.preventDefault();

    if (taskText.trim().length === 0) return;

    addTask(taskText);
    setTaskText('');
  };

  return (
    <>
      <h3>Add a new task</h3>
      <form onSubmit={subitHandler}>
        <input
          type='text'
          placeholder='task text here'
          className='form-control'
          value={taskText}
          onChange={({ target: { value } }) => setTaskText(value)}
        />
      </form>
    </>
  );
};

export default TaskForm;
