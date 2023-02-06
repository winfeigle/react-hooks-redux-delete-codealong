import React from "react";
import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice";

function Todo({ todo }) {
  const dispatch  = useDispatch();

  const handleDeleteClick = () => {
    dispatch(todoRemoved(todo.id));
  }

  return (
    <li>
      <span>{todo.text}</span>
      <button 
        style={{marginLeft: "10px"}}
        onClick={handleDeleteClick}
        >
          delete
        </button>
    </li>
  );
}

export default Todo;
