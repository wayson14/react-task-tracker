import { React, useState } from 'react';
import Header from './components/Header';
import Tasks  from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    }
    ]
)

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  console.log(id)
}
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
