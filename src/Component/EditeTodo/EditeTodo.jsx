import React, { useEffect, useState } from 'react'
import { FaHandPointUp ,FaHandPointDown} from 'react-icons/fa';
import { AiOutlineSave} from 'react-icons/ai';

import './EditeTodo.css'
import { useCallback } from 'react';
function EditeTodo({id,todo,setTodo,callback,style,moveEditeUp,moveEditeDown}) {
    const [inputEdite,setInputEdite] = useState(todo);

    const onEditeSubmite =(event)=>{
        event.preventDefault();
        callback(id , inputEdite);
   }
    const inputEditeRef = useCallback((inputElement) => {
        if (inputElement) {
        inputElement.focus();
        }
    },[]);
   const moveDown=()=>{
        moveEditeUp(id)
   };
   const moveUp=()=>{
        moveEditeDown(id)
   };
  return (
    <>
        <form className='edite-text-todo posi-abs'  onSubmit={onEditeSubmite} style={style} id={id}>
            <input autoFocus value={inputEdite} onChange={(e)=>setInputEdite(e.target.value)} type="text" className='edite-text-todo posi-abs' ref={inputEditeRef} />
            <button type="submit"><AiOutlineSave/></button>
        </form>
        <div style={style}>
            <button className='moveup-todo posi-abs move-btn' onClick={moveDown}>
                 <FaHandPointUp/>
            </button>
            <button className='movedown-todo posi-abs move-btn' onClick={moveUp}>
               <FaHandPointDown/>
            </button>
        </div>
    </>
  )
}

export default EditeTodo