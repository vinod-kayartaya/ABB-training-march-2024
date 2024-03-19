import React from 'react';

function Header({ authorEmail, authorName }) {
  const title = 'Task Manager App';
  const subtitle = 'version 1.0';

  return (
    <>
      {/* .alert.alert-primary>.container */}
      <div className='alert alert-primary'>
        <div className='container'>
          <h1 className='reddish'>
            <i className='bi bi-list-task'></i> {title}
          </h1>
          <p>
            {subtitle} - developed by {authorName} ({authorEmail})
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
