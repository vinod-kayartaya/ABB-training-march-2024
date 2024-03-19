import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TaskList from './TaskList';

const taskData = [
  { id: 1, text: 'learn css basics', finished: false },
  { id: 2, text: 'learn react basics', finished: true },
  { id: 3, text: 'learn props in react', finished: true },
  { id: 4, text: 'learn calling REST api', finished: false },
];

function App() {
  const [tasks, setTasks] = useState(taskData);

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
        <p>react is really cool</p>
        <TaskList data={tasks} deleteTask={deleteTask} />
      </div>

      <Footer companyName='Learn with Vinod' year={2023} />
    </>
  );
}

export default App;
