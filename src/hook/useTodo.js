import { useContext } from "react";
import TodoContext from "../components/TodoContext";
const useTodo = () => useContext(TodoContext);
export default useTodo;
