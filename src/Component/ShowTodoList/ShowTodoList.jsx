import React, { useEffect, useState } from 'react'
import './ShowTodoList.css'

import {GiCheckMark} from 'react-icons/gi';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Line} from 'react-icons/ri';
import EditeTodo from '../EditeTodo/EditeTodo';



function ShowTodoList({todo,setTodo}) {

    const [undo,setUndo]= useState(true)
    const [editeItem,setediteItem]= useState('')



    function complete(event){
        setediteItem('')
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
        setediteItem('')
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

    function editeEnd(id,todoO){
        setediteItem('')
        setTodo((s)=>{
            const sEdited=s.map((todo)=>{
                if(todo.id === id){
                    todo.todo = todoO;
                    return todo;
                }else{
                    return todo
                }
            })
            return sEdited
        });

    }

    function moveEditeUp(id){
        setediteItem("")
        setTodo((s)=>{

            s.forEach((element ,index)=>{
                if(element.id === id && index !== 0){
                    let swap 
                    swap= s[index]
                    s[index] = s[index-1] 
                    s[index-1] = swap
                }
            })
            return s
        })
        setTimeout(() => {
            setediteItem(id)
        },20);

    }
    function moveEditeDown(id){
        setediteItem("")
        setTodo((s)=>{
            let flag = true
            s.forEach((element ,index,arr)=>{
                if(element.id === id && index < arr.length-1 && flag){
                    
                    let swap 
                    swap= s[index]
                    s[index] = s[index+1] 
                    s[index+1] = swap
                    flag = false
                }
            })
            return s
        })
        setTimeout(() => {
            setediteItem(id)
        }, 20);
    }

    const list = todo;
  return (
    <div className='show-todo-list'>
        
        <ul>
            {list.map((i,index)=>{
                const id = i.id
                return  <li key={id} id={id}>
                            <div className="color-todo" style={{background: i.color}}>
                                <div>{index+1}</div>
                            </div>
                            <p>{i.todo}</p>                         
                            <button className={` ${i.complete? "complete":"check"} checkmark`} id={id}  onClick={complete}><GiCheckMark/></button>
                            <div className='cuntene-todo-b'>
                                <button className='edit'id={id} onClick={()=>setediteItem(id)}><AiOutlineEdit/></button>
                            </div>
                            <div className='cuntener-todo-b'>
                                <button className='delete' id={id} onClick={deleteTodo}><RiDeleteBin5Line/></button>
                            </div>
                         <EditeTodo id={id} todo={i.todo} setTodo={setTodo} moveEditeUp={moveEditeUp} moveEditeDown={moveEditeDown} callback={editeEnd} style={{display: editeItem === id ? '':"none"} }/>
                        </li>
            })}           
        </ul>
        
    </div>
  )
}

export default ShowTodoList