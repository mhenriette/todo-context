import "./App.css";
import ToDo from "./components/ToDo";
import TodoProvider from "./components/TodoProvider";

const App = () => {
  return (
    <div className="flex h-screen justify-center bg-gradient-to-tr from-[#bdc3c7] to-[#2c3e50]">
      <TodoProvider>
        <ToDo />
      </TodoProvider>
    </div>
  );
};

export default App;
