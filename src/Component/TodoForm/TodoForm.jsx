import React, { useEffect, useState } from 'react'
import './TodoForm.css'
import {ImBoxAdd} from 'react-icons/im'
import {GiConfirmed} from 'react-icons/gi'
import {AiOutlineCloseCircle ,AiOutlineCheckCircle} from 'react-icons/ai'




function TodoForm({setTodo,todo}) {
    const [input,setInput]= useState('')
    const [inputNote,setInputNote]= useState('')
    const [color,setColor]= useState('#2596be')
    const [display,setDisplay]= useState(false)


    function handleColorChenge(e){
      const inputColor = e.target.value
        setColor(inputColor)
    }
    function handleSubmit(e){
      e.preventDefault();
      if(input=== '') return;
      setTodo((s)=>[...s,
        {
          complete:false,
          todo:input,
          id:crypto.randomUUID(),
          color: color,
          note: inputNote.split(/\n/),
        }
      ]);
      setInput('')
      setInputNote('')
      setDisplay(false)
    }
    

  return (
    <>  
      {todo.length === 0?<div className="add-some-todo"><h4>یک تسک اضافه کن</h4></div>:''}
      <button className='display-form' onClick={()=> setDisplay(true)} style={{display: display? 'none':''}}>+</button>

      {
      !display?'':
      <form className='todo-form' onSubmit={handleSubmit} autocomplete="off" >
          <div className='cuntener-input' >
              {/* <input type="color" value={color} onChange={handleColorChenge} name="color" id="color" /> */}
              <input autoFocus className='title' type="text" value={input} onChange={(e)=> setInput(e.target.value)} name="todo" id="todo" placeholder='رو چی داری کار می کنی؟'/>
              <textarea type="text" className='note' value={inputNote} onChange={(e)=> setInputNote(e.target.value)} name="todo" id="todo" placeholder='متن اضافه کن'/>
          </div>
          <button type="submit" className='confirm-button'><AiOutlineCheckCircle/></button>
          <button className='close-form confirm-button' onClick={()=>setDisplay(false)}><AiOutlineCloseCircle/></button>
      </form>
      }
    </>
  )
}

export default TodoForm