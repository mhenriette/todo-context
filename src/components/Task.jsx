import trash from "../assets/trash.svg";
import editIcon from "../assets/edit.svg";
import { useContext } from "react";
import TodoContext from "./TodoContext";

const Task = ({ children, onClick, onChange, checked, getCurrentId, id }) => {
    const context = useContext(TodoContext);
    const { getCurrent, edit, currentId, updateTask, updatedTask } = context;
    return (
        <div className="flex items-center justify-between border-b border-solid py-3 border-gray-300 ">
            <div
                className={`flex items-center gap-5 text-gray-300 text-2xl font-normal flex-grow ${checked && "line-through"
                    }`}
            >
                <input
                    type="checkbox"
                    name={children}
                    checked={checked}
                    onChange={onChange}
                />
                {edit && currentId === id ? (
                    <input
                        value={updatedTask}
                        onChange={updateTask}
                        type='text'
                        name="trial"
                        className="bg-gray-600"
                    />
                ) : (
                    <label htmlFor={children}>{children}</label>
                )}
            </div>
            <div className="flex items-center gap-3">
                <button onClick={onClick} className="bg-red-600 px-2 text-gray-300 text-sm py-1">
                    {/* <img src={trash} alt="trash" className="w-6 h-6" /> */}
                    <span>Delete</span>
                </button>
                <button onClick={getCurrentId} className="bg-blue-600 px-3 text-gray-300 text-sm py-1">
                    {/* <img src={editIcon} alt="editIcon" className="w-6 h-6" /> */}
                    <span>Edit</span>
                </button>
            </div>
        </div>
    );
};

export default Task;
