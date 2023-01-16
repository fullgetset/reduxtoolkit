import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/todoSlice";

const InputField = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => dispatch(addNewTodo({ text }));
  const handleChangeText = (e) => setText(e.target.value);

  return (
    <label>
      <input value={text} onChange={handleChangeText} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </label>
  );
};

export default InputField;
