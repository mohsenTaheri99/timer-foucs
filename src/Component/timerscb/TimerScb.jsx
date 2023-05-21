import React from 'react'
import './timerScb.css'
function TimerScb(props) {
  return (
    <div className="back-scb">
        <div className='timer-Scb' style={{ width:(1- props.time / props.maxTime) *100 +'%' }}></div>
    </div>
  )
}

export default TimerScb