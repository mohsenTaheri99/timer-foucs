import React from 'react'
import './timerScb.css'
function TimerScb(props) {
  return (
    <div className='timer-Scb' style={{ width:(1- props.time / props.maxTime) *100 +'%' }}></div>
  )
}

export default TimerScb