import React, { Component } from 'react';

export default class Toolbar extends Component {
  render() {
    const {
      deleteFinishedTasks,
      deleteAllTasks,
      taskCount,
      toggleTaskStatus,
      sortTasks,
    } = this.props;

    return (
      <>
        <div className='mb-3'>
          <button
            disabled={!taskCount}
            onClick={deleteAllTasks}
            className='btn btn-outline-secondary'
          >
            Delete all
          </button>
          <button
            disabled={!taskCount}
            onClick={deleteFinishedTasks}
            className='btn btn-outline-secondary ms-2'
          >
            Delete finished
          </button>
          <button
            disabled={!taskCount}
            onClick={toggleTaskStatus}
            className='btn btn-outline-secondary ms-2'
          >
            Toggle status
          </button>
          <button
            disabled={!taskCount}
            onClick={sortTasks}
            className='btn btn-outline-secondary ms-2'
          >
            Sort
          </button>
        </div>
      </>
    );
  }
}
