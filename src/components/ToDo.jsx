import plus from "../assets/plus.svg";
import TodoContext from "./TodoContext";
import { useContext } from "react";
import Form from "./Form";




const ToDo = () => {
    const context = useContext(TodoContext)

    return <div className="my-32 lg:w-1/2 text-center">
        <h1 className="text-gray-300 text-7xl font-bold my-10">todos</h1>
        <div className=" rounded-full px-5 bg-white  shadow-small w-full flex items-center justify-between">
            <input
                placeholder="Add your task..."
                type="text"
                value={context.text}
                className="flex-grow py-3 outline-none"
                name="taskName"
                onChange={context.handleText}
            />
            <button onClick={context.addTask}>
                <img src={plus} alt="plus" className="w-8 h-8" />
            </button>
        </div>
        <Form />

    </div >
};

export default ToDo;
