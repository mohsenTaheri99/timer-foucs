import React, { useEffect, useState } from 'react'

import SecondsCounter from '../../Component/SecondsCounter'
import {  BsFillPlayFill,BsPauseFill,BsFillSkipEndFill } from "react-icons/bs";
import {  MdReplay } from "react-icons/md";
import Todo from '../../Component/todo/Todo';

import "./Timer.css";
import TimerScb from '../../Component/timerscb/TimerScb'
import TimeDate from '../../Component/TimeDate/TimeDate';
import Footer from '../../Component/footer/Footer'
import Header from '../../Component/header/Header';
function Timer(props) {
  const [time , setTime] = useState((t)=> {
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount <= props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
  });

  const [isPlay , SetIsPlay] = useState(false);
  const [currentPosition ,setCurrentPosition] = useState('کار کردن');

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

  useEffect(()=>{
    SetIsPlay(false); 
    setTime((t)=> resetTime());
    if(props.isWorking){
      setCurrentPosition('کار کردن')
    }else if(props.shortBreakCount === props.shortBreakinterval){
      setCurrentPosition('استراحت طولانی')
    }else{
      setCurrentPosition('استراخت کوتاه')
    }
  },[props.isWorking])

  const resetTime = function(){
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount < props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
  }

  return (
    <div className="main-time-cuntener"  >
        <header className='time-header '><Header/></header>
        <div className='timer'>
            <TimerScb time={time} maxTime={resetTime()}/>
            <div className='currentPosition'>
                {currentPosition}
            </div>
            <div>
                {'#'+props.season}
            </div>
            <SecondsCounter time = {time} className="show-time"/>
            <div className='control'>
              <button onClick={()=>{SetIsPlay(false);setTime((t)=>resetTime())}} className='s-button'>{<MdReplay/>}</button>
              <button onClick={()=> SetIsPlay((s)=> !s )} className='l-button'>{isPlay?  <BsPauseFill/> :<BsFillPlayFill/>}</button>
              <button onClick={()=> props.timeEnd(time)} className='s-button'>{<BsFillSkipEndFill/>}</button>
            </div>
        </div>
        <div className="time-date"><TimeDate/></div>

        <div className="todo-timer-cuntener">
          <Todo ColorBG={props.ColorBG}/>
        </div>
        <footer><Footer/></footer>
        
        
    </div>
  );
}



export default Timer