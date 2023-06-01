import React, { useEffect, useState } from 'react'
import './TodoForm.css'
import {ImBoxAdd} from 'react-icons/im'
import {GiConfirmed} from 'react-icons/gi'
import {AiOutlineCloseCircle ,AiOutlineCheckCircle} from 'react-icons/ai'




function TodoForm({setTodo,todo,setDisplayTodo}) {
    const [input,setInput]= useState('')
    const [inputNote,setInputNote]= useState('')
    const [color,setColor]= useState('#2596be')
    const [display,setDisplay]= useState(false)
    const [displayAddNot,setDisplayAddNot]= useState(false)



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
      setDisplayTodo(true)
      setDisplayAddNot(false)
    }
    

  return (
    <>  
      {todo.length === 0?
        <div className="add-first-todo" style={{display: display? 'none':''}}>
          <h4>یک تسک اضافه کن</h4>
          <button className='add' onClick={()=> {setDisplay(true);setDisplayTodo(false)}}>+</button>
        </div>
        :''
      }
      <button className='display-form' onClick={()=> {setDisplay(true);setDisplayTodo(false)}} style={{display: display? 'none':''}}>+</button>

      {
      !display?'':
      <form className='todo-form' onSubmit={handleSubmit} autocomplete="off" >
          <div className='cuntener-input' >
              {/* <input type="color" value={color} onChange={handleColorChenge} name="color" id="color" /> */}
              <input autoFocus className='title' type="text" value={input} onChange={(e)=> setInput(e.target.value)} name="todo" id="todo" placeholder='رو چی داری کار می کنی؟'/>
              {
               displayAddNot? <textarea autoFocus type="text" className='note' value={inputNote} onChange={(e)=> setInputNote(e.target.value)} name="todo" id="todo" placeholder='متن اضافه کن'/>
               :<button type="button" onClick={()=>setDisplayAddNot(true)}>اضافه کردن متن</button>
              }
          </div>
          <button type="submit" className='confirm-button'><AiOutlineCheckCircle/></button>
      
          <button className='close-form confirm-button' onClick={()=>{setDisplay(false);setDisplayTodo(true); setDisplayAddNot(false);setInput('');setInputNote('')}}><AiOutlineCloseCircle/></button>
      </form>
      }
    </>
  )
}

export default TodoForm