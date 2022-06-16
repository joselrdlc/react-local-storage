import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisivilityControl } from './components/VisivilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4">
        <div className="col-md-4 offset-md-4">
          <TaskCreator createNewTask={createNewTask} />

          <TaskTable tasks={taskItems} toggleTask={toggleTask} />

          <VisivilityControl 
            isChecked = {showCompleted}
            setShowCompleted = {(checked) => setShowCompleted(checked)}
            cleanTasks = {cleanTasks}
          />

          {
            showCompleted === true && (
              <TaskTable 
                tasks={taskItems} 
                toggleTask={toggleTask} 
                showCompleted={showCompleted} 
              />
            )
          }
        </div>
      </div>
    </main>
  );
}

export default App;
