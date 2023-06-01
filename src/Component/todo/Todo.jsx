import React, { useState,useId, useEffect } from 'react'
import './todo.css'

import {  BiBookAdd } from "react-icons/bi";
import {  AiOutlineClose } from "react-icons/ai";
import {  GrNotes } from "react-icons/gr";
import {IoMdAddCircleOutline} from 'react-icons/io'
import TodoForm from '../TodoForm/TodoForm';
import ShowTodoList from '../ShowTodoList/ShowTodoList';
import useLocalStorage from '../../hook/useLocalStorage';



function Todo({ColorBG}) {
  const [todo,setTodo] = useLocalStorage('todo',[])
  const [displayTodo , setDisplayTodo] = useState(todo.length === 0 ? false:true)
  return (
    <div className='todo'>
        {displayTodo ? <ShowTodoList todo={todo} setTodo={setTodo}/>:''}
        <TodoForm setTodo={setTodo} todo={todo} setDisplayTodo={setDisplayTodo}/>
    </div>
  )
}

export default Todo