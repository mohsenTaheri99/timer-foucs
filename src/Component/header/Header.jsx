import React, { useState } from 'react'
import './header.css'
import {BsFillPersonFill} from 'react-icons/bs'
import Toggle from '../toggle/Toggle'
function Header() {
  const [darkmod,setDarkmod] = useState(false)
  return (
    <div className='header-cuntener'>
        <div className='profile'>
            <div className='name'>{'محسن'}</div>
            <div className="profile-picture"><BsFillPersonFill/></div>
        </div>
        <div className='idk'>
            <div className="darkmode">
                { darkmod? <span>تاریک</span> : <span>روشن</span>}
                <Toggle callback={(e)=>setDarkmod(e)}/>
            </div>
        </div>
    </div>
  )
}

export default Header