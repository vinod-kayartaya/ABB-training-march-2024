import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TaskList from './TaskList';
import Toolbar from './Toolbar';
import TaskForm from './TaskForm';

const taskData = [
  { id: 11, text: 'learn css basics', finished: false },
  { id: 42, text: 'learn react basics', finished: true },
  { id: 32, text: 'learn props in react', finished: true },
  { id: 14, text: 'learn calling REST api', finished: false },
];

function App() {
  const [tasks, setTasks] = useState(taskData);
  const [isAscending, setAscending] = useState(false);

  const addTask = (text) => {
    const id = tasks.length === 0 ? 1 : 1 + Math.max(...tasks.map((t) => t.id));
    setTasks([...tasks, { id, text, finished: false }]);
  };

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
      <div className='container'>
        {/* .row>.col-6*2 */}
        <div className='row'>
          <div className='col-6'>
            <TaskForm addTask={addTask} />
          </div>
          <div className='col-6'>
            <Toolbar
              taskCount={tasks.length}
              sortTasks={sortTasks}
              deleteAllTasks={deleteAllTasks}
              toggleTaskStatus={toggleTaskStatus}
              deleteFinishedTasks={deleteFinishedTasks}
            />
            <TaskList data={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>

      <Footer companyName='Learn with Vinod' year={2023} />
    </>
  );
}

export default App;
