import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { nanoid } from "nanoid";
import TodoContext from './components/TodoContext';

function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState(false)
  const handleText = (event) => {
    const { value } = event.target
    setText(value)

  }


  const handleClick = (id) => {
    const newTasks = tasks.map(task =>
      (task.id === id) ? { ...task, checked: !task.checked } : task
    )
    setTasks(newTasks)
  }
  const addTask = () => {
    if (text === "") return alert('Task name must be provided!!')
    const task = {
      id: nanoid(),
      value: text,
      checked: false,
    }
    setTasks((oldTask) => [...oldTask, task])
    setText("")
  }
  const deleteTask = (id) => {

    const newTasks = tasks.filter(task => task.id !== id || !task.checked)
    setTasks(newTasks)
  }

  return (
    <div className="flex h-screen justify-center bg-gradient-to-tr from-[#bdc3c7] to-[#2c3e50]">
      <TodoContext.Provider value={{ text, edit, tasks, handleText, addTask, deleteTask, handleClick }}>
        <ToDo />
      </TodoContext.Provider>

    </div>
  )
}

export default App
