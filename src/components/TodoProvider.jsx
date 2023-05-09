import { nanoid } from "nanoid";
import TodoContext from "./TodoContext";
import { useState } from "react";

const TodoProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [updatedTask, setUpdateTask] = useState("");
  const handleText = (event) => {
    const { value } = event.target;
    setText(value);
  };
  const updateTask = (event) => {
    const { value } = event.target;
    setUpdateTask(value);
  };
  const getCurrent = (id) => {
    const current = tasks.find((task) => task.id === id);
    setCurrentId(current.id);
    setEdit((prev) => !prev);
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, value: updatedTask } : task
    );
    setTasks(newTasks);
    setUpdateTask("");
  };
  const handleClick = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(newTasks);
  };
  const addTask = () => {
    if (text === "") return alert("Task name must be provided!!");
    const task = {
      id: nanoid(),
      value: text,
      checked: false,
    };
    setTasks((oldTask) => [...oldTask, task]);
    setText("");
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id || !task.checked);
    setTasks(newTasks);
  };
  return (
    <TodoContext.Provider
      value={{
        text,
        edit,
        tasks,
        handleText,
        addTask,
        deleteTask,
        handleClick,
        getCurrent,
        currentId,
        updateTask,
        updatedTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
