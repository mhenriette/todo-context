import { useContext } from "react";
import TodoContext from "../components/TodoContext";
const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
export default useTodo;
