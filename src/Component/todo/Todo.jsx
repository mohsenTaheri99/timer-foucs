import React, { useState,useId } from 'react'
import './todo.css'

import {  BiBookAdd } from "react-icons/bi";
import {  AiOutlineClose } from "react-icons/ai";
import {  GrNotes } from "react-icons/gr";
import {IoMdAddCircleOutline} from 'react-icons/io'
import TodoForm from '../TodoForm/TodoForm';
import ShowTodoList from '../ShowTodoList/ShowTodoList';



function Todo({ColorBG}) {
  const [todo,setTodo] = useState([])
  
  return (
    <div className='todo' >
        <ShowTodoList todo={todo} setTodo={setTodo}/>
        <TodoForm setTodo={setTodo} todo={todo}/>
    </div>
  )
}

export default Todo