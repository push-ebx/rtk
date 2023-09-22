import React from 'react';
import {removeTodo, toggleTodoComplete} from "../store/todoSlice.js";
import {useDispatch} from "react-redux";

const TodoItem = ({id, completed, text}) => {
  const dispatch = useDispatch()

  const toggleTask = () => dispatch(toggleTodoComplete({id}))
  const removeTask = () => dispatch(removeTodo({id}))

  return (
    <li>
      <input type={'checkbox'} onChange={toggleTask} checked={completed}/>
      <span>{text}</span>
      <span onClick={removeTask} className={'delete'}>&times;</span>
    </li>
  );
};

export default TodoItem;