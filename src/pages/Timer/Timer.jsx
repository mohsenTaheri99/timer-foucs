import React, { useEffect, useRef, useState } from 'react'
import alarmOne from '../../sound/alarm.mp3'

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
  const alarm = useRef(new Audio(alarmOne))
  const play = (what)=>{
    if(props.mute) return
    if(!alarm.paused) {
      // alarm.pause()
      return
    }
    if(what)alarm.play()
    
  }

  
  useEffect(()=>{
    play(false)
  },[props.mute])
  

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
      play(true)
      props.timeEnd(time);
      SetIsPlay((s)=> !s );
    }

  },[time ])

  useEffect(()=>{
    SetIsPlay(false); 
    setTime((t)=> resetTime());
    if(props.isWorking){
      setCurrentPosition('کار کردن')
    }else if(props.shortBreakCount === props.shortBreakinterval - 1){
      setCurrentPosition('استراحت طولانی')
    }else{
      setCurrentPosition('استراخت کوتاه')
    }
  },[props.isWorking])

  const resetTime = function(){
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount < props.shortBreakinterval -1 ? props.shorbreakTime : props.longBreakTime}

  }

  return (
    <div className="main-time-cuntener"  >
        <header className='time-header' style={{...darkStyleBg(props.darkmod)}}><Header setMute={props.setMute} mute={props.mute} setDarkmod={props.setDarkmod} darkmod={props.darkmod} /></header>
        <div className='timer' style={{...darkStyleBg(props.darkmod)}}>
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
        <div className="time-date" style={{...darkStyleBg(props.darkmod)}}><TimeDate/></div>

        <div className="todo-timer-cuntener" style={{...darkStyleBg(props.darkmod)}}>
          <Todo ColorBG={props.ColorBG}/>
        </div>
        <footer style={{...darkStyleBg(props.darkmod)}}><Footer/></footer>
        
        
    </div>
  );
}

const darkStyleBg = (darkmod)=> {
  if(darkmod) return {
    background : '#2e2e2e',
    color : 'white',
    // border : '1px solid rgb(37, 150, 190)',
    // boxShadow: '0 0 5px 2px rgb(37, 150, 190),0 0 0px 2px rgb(18, 36, 194)',

  }
  else return {}
}


export default Timer