import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleChangeComplete = () =>
    dispatch(toggleTodoStatus({ id: todo.id }));

  const handleRemoveTodo = () => dispatch(deleteTodo({ id: todo.id }));

  return (
    <li className="app__todo-item">
      <input
        className="app__todo-check"
        type="checkbox"
        checked={todo.completed}
        onChange={handleChangeComplete}
      />
      <span className="app__todo-text">{todo.title}</span>
      <span onClick={handleRemoveTodo} className="app__todo-delete">
        X
      </span>
    </li>
  );
};

export default TodoItem;
