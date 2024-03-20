import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TaskList from './TaskList';
import Toolbar from './Toolbar';

const taskData = [
  { id: 1, text: 'learn css basics', finished: false },
  { id: 2, text: 'learn react basics', finished: true },
  { id: 3, text: 'learn props in react', finished: true },
  { id: 4, text: 'learn calling REST api', finished: false },
];

function App() {
  const [tasks, setTasks] = useState(taskData);
  const [isAscending, setAscending] = useState(false);

  const sortTasks = () => {
    const tasksCopy = [...tasks];
    if (isAscending) {
      tasksCopy.sort((t1, t2) => t2.text.localeCompare(t1.text));
    } else {
      tasksCopy.sort((t1, t2) => t1.text.localeCompare(t2.text));
    }
    setAscending(!isAscending);
    setTasks(tasksCopy);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const deleteFinishedTasks = () => {
    const pendingTasks = tasks.filter((t) => !t.finished);
    setTasks(pendingTasks);
  };

  const toggleTaskStatus = () => {
    const newTasks = tasks.map((t) => {
      t.finished = !t.finished;
      return t;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((t) => t.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <>
      <Header authorName='Vinod' authorEmail='vinod@vinod.co' />
      <div
        className='container'
        style={{
          minHeight: '500px',
        }}
      >
        <Toolbar
          taskCount={tasks.length}
          sortTasks={sortTasks}
          deleteAllTasks={deleteAllTasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteFinishedTasks={deleteFinishedTasks}
        />
        <TaskList data={tasks} deleteTask={deleteTask} />
      </div>

      <Footer companyName='Learn with Vinod' year={2023} />
    </>
  );
}

export default App;
