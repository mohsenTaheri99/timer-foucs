import React, { useState } from 'react'
import './toggle.css'

function Toggle({callback,darkmod,style}) {
    const handleClick =()=>{
        callback(!darkmod);

    }
  return (
    <div className='toggle-bg'  onClick={handleClick} style={style}>
        <div className={`toggle-thumb ${darkmod? "toggle-on":"toggle-off"}`} ></div>
    </div>
  )
}

export default Toggle