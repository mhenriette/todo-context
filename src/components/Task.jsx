import trash from "../assets/trash.svg";
import editIcon from "../assets/edit.svg"


const Task = ({ children, onClick, onChange, checked }) => {

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
                <label htmlFor={children}>{children}</label>
            </div>
            <div className="flex items-center gap-3">
                <button onClick={onClick}><img src={trash} alt="trash" className="w-6 h-6" /></button>
                <button ><img src={editIcon} alt="editIcon" className="w-6 h-6" /></button>
            </div>

        </div>
    );
};

export default Task;
