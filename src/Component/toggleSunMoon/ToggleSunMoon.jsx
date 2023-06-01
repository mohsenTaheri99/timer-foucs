import React, { useState } from 'react'
import './toggleSunMoon.css'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
function Toggle({callback,darkmod,style}) {
    const handleClick =()=>{
        callback(!darkmod);

    }
  return (
    <div className='toggle-bg-s'  onClick={handleClick} style={style}>
          <BsFillMoonFill color='white'/>
          <BsFillSunFill color='rgb(228, 228, 0)'/>
        <div className={`toggle-thumb-s ${darkmod? "toggle-on-s":"toggle-off-s"}`}>
        </div>
    </div>
  )
}

export default Toggle