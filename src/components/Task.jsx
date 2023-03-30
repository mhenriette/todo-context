import useTodo from "../hook/useTodo";
const Task = ({ children, checked, id }) => {
  const {
    edit,
    currentId,
    updateTask,
    deleteTask,
    updatedTask,
    getCurrent,
    handleClick,
  } = useTodo();
  return (
    <div className="flex items-center justify-between border-b border-solid py-3 border-gray-300 ">
      <div
        className={`flex items-center gap-5 text-gray-300 text-2xl font-normal flex-grow ${
          checked && "line-through"
        }`}
      >
        <input
          type="checkbox"
          name={children}
          checked={checked}
          onChange={() => handleClick(id)}
        />
        {edit && currentId === id ? (
          <input
            value={updatedTask}
            onChange={updateTask}
            type="text"
            name={updatedTask}
            className="bg-gray-600"
          />
        ) : (
          <label htmlFor={children}>{children}</label>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => deleteTask(id)}
          className="bg-red-600 px-2 text-gray-300 text-sm py-1"
        >
          <span>Delete</span>
        </button>
        <button
          onClick={() => getCurrent(id)}
          className="bg-blue-600 px-3 text-gray-300 text-sm py-1"
        >
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
