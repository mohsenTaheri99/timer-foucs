import React, { useState } from 'react'
import './header.css'
import {BsFillPersonFill ,BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import {GoMute ,GoUnmute} from 'react-icons/go'

import Toggle from '../toggle/Toggle'
import ToggleSunMoon from '../toggleSunMoon/ToggleSunMoon';
function Header({darkmod,setDarkmod,mute ,setMute}) {

  return (
    <div className='header-cuntener'>
        <div className={`profile ${darkmod ? 'hoverShowdow':''}`} style={darkStyle(darkmod)}>
            <div className='name'>{'مهمان'}</div>
            <div className="profile-picture"><BsFillPersonFill/></div>
        </div>
        <div className='idk'>
            <div className={`darkmode ${darkmod ? 'hoverShowdow':''}`} style={darkStyle(darkmod)}>
              <ToggleSunMoon callback={setDarkmod} darkmod={darkmod}/>
            </div>
            <div className={`mute `} style={darkStyleMute(darkmod)}>
              <div className="lable-darkmod" onClick={()=> setMute(s => !s)}>
                    { mute?  <GoMute color={darkmod? 'white': ''}/> : <GoUnmute color={darkmod? 'white': ''}/>}
              </div >
            </div>
            <h1>مدیرت زمان</h1>
        </div>
    </div>
  )
}

const darkStyle = (darkmod)=> {
  if(darkmod) return {
    background : '#2e2e2e',
    color : 'white',
    border: '1px solid rgb(37, 150, 190)',
  }
  else return {}
}

const darkStyleMute = (darkmod)=> {
  if(darkmod) return {
    background : '#2e2e2e',
    color : 'white',
  }
  else return {}
}



export default Header