import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <>
      <div className='list-group-item'>
        <span
          style={{ textDecoration: task.finished ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>

        <div className='float-end'>
          <button
            onClick={() => deleteTask(task.id)}
            className='btn btn-link bi bi-trash'
          ></button>
          <button className='btn btn-link bi bi-pen'></button>
          <button className='btn btn-link bi bi-arrow-up-circle'></button>
          <button className='btn btn-link bi bi-arrow-down-circle'></button>
        </div>
      </div>
    </>
  );
};

export default Task;
