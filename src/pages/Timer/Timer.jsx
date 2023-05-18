import React, { useEffect, useState } from 'react'

import SecondsCounter from '../../Component/SecondsCounter'

import "./Timer.css"
function Timer(props) {
  const [time , SetTime] = useState((t)=> {
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount <= props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
  });

  const [isPlay , SetIsPlay] = useState(false);

  useEffect(() => {
    if(isPlay){
      const interval = setInterval(() => SetTime((t)=>t-1), 1000);
      return () => clearInterval(interval);
    }
  }, [isPlay]);
  useEffect(()=>{
    if(time === 0){
      props.timeEnd();
      SetIsPlay((s)=> !s );
      

      console.log(props)
    }

  },[time ])

  useEffect(()=>{ SetTime((t)=> {
    if(props.isWorking){ return props.workingTime}
    else {return props.shortBreakCount < props.shortBreakinterval ? props.shorbreakTime : props.longBreakTime}
    } );
    console.log('render')
  },[props.isWorking])

  return (
    <div className="main-cuntener">
        <div className="timer">
          <SecondsCounter time = {time}/>
          <button onClick={()=> SetIsPlay((s)=> !s )}>{isPlay? "pause" : "play"}</button>
        </div>
    </div>
  );
}

export default Timer