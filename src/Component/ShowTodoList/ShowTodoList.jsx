import React, { useState } from 'react'
import './ShowTodoList.css'

import {GiCheckMark} from 'react-icons/gi';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Line} from 'react-icons/ri';



function ShowTodoList({todo,setTodo}) {

    const [undo,setUndo]= useState(true)

    function complete(event){
        const id = event.currentTarget.id;
        const cp = event.currentTarget.classList[0];
        setTodo((s)=>{
            return s.map((m)=>{
                if(m.id === id){
                    m.complete = cp === 'complete' ? false : true;
                    console.log(m)
                    return m ;
                }
                else return m 
            })
        })

    }

    function deleteTodo(event){
        const id = event.currentTarget.id;
        setTodo((s)=>{
            return s.filter((m)=>{
                if(m.id === id){
                    return false
                }
                else return true
            })
        })
        
    }
    const list = todo;
  return (
    <div className='show-todo-list'>
        
        <ul>
            {list.map((i)=>{
                return  <li key={i.id} id={i.id}>
                            <div className="color-todo" style={{background: i.color}}></div>
                            <span>{i.todo}</span>                         
                            <button className={` ${i.complete? "complete":"check"} checkmark`} id={i.id}  onClick={complete}><GiCheckMark/></button>
                            <div className='cuntene-todo-b'>
                                <button className='edit'  id={i.id}  ><AiOutlineEdit/></button>
                            </div>
                            <div className='cuntener-todo-b'>
                                <button className='delete' id={i.id} onClick={deleteTodo}><RiDeleteBin5Line/></button>
                            </div>
                            
                        </li>
            })}           
        </ul>
        
    </div>
  )
}

export default ShowTodoList