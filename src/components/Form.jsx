import Task from "./Task";
import useTodo from "../hook/useTodo";

const Form = () => {
    const { tasks } = useTodo();
    return (
        <form className="m-5" onSubmit={(event) => event.preventDefault()}>
            {tasks.length ? (
                tasks.map(({ value, id, checked }) => (
                    <Task children={value} key={id} checked={checked} id={id} />
                ))
            ) : (
                <h1 className="text-xl font-medium text-gray-400">
                    Proper planning and preparation prevents poor performance. 💡
                </h1>
            )}
        </form>
    );
};

export default Form;
