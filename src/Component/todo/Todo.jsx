import React, { useState,useId } from 'react'
import './todo.css'

import {  BiBookAdd } from "react-icons/bi";
import {  AiOutlineClose } from "react-icons/ai";
import {  GrNotes } from "react-icons/gr";
import {IoMdAddCircleOutline} from 'react-icons/io'
import TodoForm from '../TodoForm/TodoForm';
import ShowTodoList from '../ShowTodoList/ShowTodoList';



function Todo() {
  const [todo,setTodo] = useState([])
  
  return (
    <div className='todo'>
        <TodoForm setTodo={setTodo} todo={todo}/>
        <ShowTodoList todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default Todo