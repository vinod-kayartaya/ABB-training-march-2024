import React from 'react';
import Task from './Task';

const TaskList = ({ data, deleteTask, toggleSingleTaskStatus, moveUpDown }) => {
  const list = data.map((t) => (
    <Task
      key={t.id}
      task={t}
      deleteTask={deleteTask}
      toggleSingleTaskStatus={toggleSingleTaskStatus}
      moveUpDown={moveUpDown}
    />
  ));

  if (data.length === 0) {
    return (
      <>
        <h3 className='text-warning'>You don't have any tasks!</h3>
      </>
    );
  }

  return (
    <div>
      <ul className='list-group'>{list}</ul>
    </div>
  );
};

export default TaskList;
