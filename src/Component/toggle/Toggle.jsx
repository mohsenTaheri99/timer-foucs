import React, { useState } from 'react'
import './toggle.css'

function Toggle({callback}) {
    const [inputToggle , setInputToggle] = useState(false)
    const handleClick =()=>{
        setInputToggle(!inputToggle)
        callback(!inputToggle);
        console.log(1)

    }
  return (
    <div className='toggle-bg'  onClick={handleClick} style={{}}>
        <div className={`toggle-thumb ${inputToggle ? "toggle-on":"toggle-off"}`}></div>
    </div>
  )
}

export default Toggle