import React, { useEffect, useState } from 'react'

import SecondsCounter from '../../Component/SecondsCounter'
import {  BsFillPlayFill,BsPauseFill,BsFillSkipEndFill } from "react-icons/bs";
import {  GrPowerReset } from "react-icons/gr";
import Todo from '../../Component/todo/Todo';



import "./Timer.css";
import TimerScb from '../../Component/timerscb/TimerScb'
function Timer(props) {
  const [time , setTime] = useState((t)=> {
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount <= props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
  });

  const [isPlay , SetIsPlay] = useState(false);

  useEffect(() => {
    if(isPlay){
      const interval = setInterval(() => setTime((t)=>t-1), 1000);
      return () => clearInterval(interval);
    }
  }, [isPlay]);
  useEffect(()=>{
    if(time === 0){
      props.timeEnd(time);
      SetIsPlay((s)=> !s );
    }

  },[time ])

  useEffect(()=>{SetIsPlay(false); setTime((t)=> resetTime() )},[props.isWorking])

  const resetTime = function(){
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount < props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
  }

  return (
    <div className="main-cuntener">
        <div className="cuntener-t-b">
          <div className='timer'>
            <TimerScb time={time} maxTime={resetTime()}/>
            <div className=''>
                {props.isWorking? 'working': 'break time'}
            </div>
            <div>
              {'#'+props.season}
            </div>
            <SecondsCounter time = {time} className="show-time"/>
            <div className='control'>
              <button onClick={()=>{SetIsPlay(false);setTime((t)=>resetTime())}} className='s-button'>{<GrPowerReset/>}</button>
              <button onClick={()=> SetIsPlay((s)=> !s )} className='l-button'>{isPlay?  <BsPauseFill/> :<BsFillPlayFill/>}</button>
              <button onClick={()=> props.timeEnd(time)} className='s-button'>{<BsFillSkipEndFill/>}</button>
            </div>
          </div>
          <Todo/>
        </div>


        
        
    </div>
  );
}



export default Timer