import React from 'react';

const TaskList = ({ data }) => {
  const list = data.map((t) => (
    <li
      className='list-group-item'
      key={t.id}
      style={{ textDecoration: t.finished ? 'line-through' : 'none' }}
    >
      {t.text}
    </li>
  ));

  return (
    <div style={{ width: '300px' }}>
      <ul className='list-group'>{list}</ul>
    </div>
  );
};

export default TaskList;
