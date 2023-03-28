import { useContext } from "react";
import TodoContext from "./TodoContext";
import Task from "./Task";

const Form = () => {
    const context = useContext(TodoContext);
    const { tasks, deleteTask, handleClick, getCurrent } = context;
    return (
        <form className="m-5" onSubmit={(event) => event.preventDefault()}>
            {tasks.length > 0 ? (
                tasks.map((task, index) => {
                    return (
                        <Task
                            children={task.value}
                            key={task.id}
                            checked={task.checked}
                            id={task.id}
                            onClick={() => deleteTask(task.id)}
                            onChange={() => handleClick(task.id)}
                            getCurrentId={() => getCurrent(task.id)}
                        />
                    );
                })
            ) : (
                <h1 className="text-xl font-medium text-gray-400">
                    Proper planning and preparation prevents poor performance. 💡
                </h1>
            )}
        </form>
    );
};

export default Form;
