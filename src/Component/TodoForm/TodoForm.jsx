import React, { useEffect, useState } from 'react'
import './TodoForm.css'


function TodoForm({setTodo}) {
    const [input,setInput]= useState('')
    const [color,setColor]= useState('#9900FF')

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
          color: color
        }
      ]);
      setInput('')
    }
    

  return (
    <form className='todo-form' onSubmit={handleSubmit} autocomplete="off">
        <div className='cuntener-input'>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} name="todo" id="todo" placeholder='رو چی داری کار می کنی؟'/>
            <input type="color" value={color} onChange={handleColorChenge} name="color" id="color" />
            <input type="submit" value={'افزودن'}/>
        </div>
    </form>
  )
}

export default TodoForm