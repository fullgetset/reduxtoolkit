import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "./store/todoSlice";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="App">
      <InputField />
      {status === "pending" && <h2>Loading...</h2>}
      {error && <h2>An error occerd: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
