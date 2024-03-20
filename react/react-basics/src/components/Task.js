import React from 'react';

const Task = ({ task, deleteTask, toggleSingleTaskStatus, moveUpDown }) => {
  return (
    <>
      <div className='list-group-item app-task'>
        <span
          onClick={() => toggleSingleTaskStatus(task.id)}
          style={{
            cursor: 'pointer',
            textDecoration: task.finished ? 'line-through' : 'none',
          }}
        >
          {task.text}
        </span>

        <div className='float-end app-buttons'>
          <button
            onClick={() => deleteTask(task.id)}
            className='btn btn-link bi bi-trash'
          ></button>
          <button className='btn btn-link bi bi-pen'></button>
          <button
            onClick={() => moveUpDown(task.id, 'up')}
            className='btn btn-link bi bi-arrow-up-circle'
          ></button>
          <button
            onClick={() => moveUpDown(task.id, 'down')}
            className='btn btn-link bi bi-arrow-down-circle'
          ></button>
        </div>
      </div>
    </>
  );
};

export default Task;
