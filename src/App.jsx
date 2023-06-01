
import './App.css';

import {
  BrowserRouter , Routes,
  Route,
  useLoaderData,
} from "react-router-dom";

import Navbar from './pages/Navbar/Navbar';
import Timer from './pages/Timer/Timer';
import Setting from './pages/Setting/Setting';

import { useState } from 'react';
import { useEffect } from 'react';
import Stats from './pages/stats/Stats';
import uesLocalStorage from './hook/useLocalStorage';
import useLocalStorage from './hook/useLocalStorage';


function App() {
  const [darkmod , setDarkmod] = useLocalStorage('darkMode',false);

  const [shorbreakTime , setShorBreakTime] = uesLocalStorage('shorbreakTime',5 * 60 );
  const [longBreakTime , setLongBreakTime] = uesLocalStorage('longBreakTime',20 * 60 );
  const [workingTime , setWorkingTime] = uesLocalStorage('workingTime',25* 60 );

  const [shortBreakinterval , setShortBreakInterval] = uesLocalStorage('shortBreakinterval',3);
  const [season , setSeason] = uesLocalStorage('season',1);
  const [shortBreakCount , setShortBreakCount] =uesLocalStorage('shortBreakCount',0);
  const [mute , setMute] =uesLocalStorage('mute', false);


  
  const [ColorBG , setColorBG] = uesLocalStorage('ColorBG','#e0e1dd');
  

  const [isWorking , setIsWorking] = useState(true);




  function timeEnd(time){
    setIsWorking((s)=>!s)
    if(isWorking){
          
    }else{
      setSeason((s)=> s+1)
      if(shortBreakCount === shortBreakinterval - 1) {
        setShortBreakCount(0)  
      }
      else {
        setShortBreakCount((s)=> s+1);
      }
    }
  }

  useEffect(()=>{
    if(isWorking){
        // setColorBG( '#cdb4db' )
    }else{
      if(shortBreakCount === shortBreakinterval - 1) {
   
        // setColorBG( '#a2d2ff' )
      }
      else {
        // setColorBG( '#bde0fe' )
      }
    }
  },[isWorking])

  // brightness(0.8) saturate(0%) invert(1)
  return (
    <div className="App bg-main" style={{ background : darkmod? 'black':'' }} >
      <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Navbar darkmod={darkmod}/>} >
              <Route path='/' element={<Timer mute={mute} setMute={setMute} darkmod={darkmod} setDarkmod={setDarkmod} ColorBG={ColorBG} longBreakTime={longBreakTime} shorbreakTime={shorbreakTime}  timeEnd={timeEnd} workingTime={workingTime} isWorking={isWorking} shortBreakCount={shortBreakCount} shortBreakinterval={shortBreakinterval} season={season}/>}/>
              <Route path='setting'  element={<Setting mute={mute} setMute={setMute} ColorBG={ColorBG} setColorBG={setColorBG} darkmod={darkmod} shortBreakinterval={shortBreakinterval} setShortBreakInterval={setShortBreakInterval} setDarkmod={setDarkmod} setShorBreakTime={setShorBreakTime} setLongBreakTime={setLongBreakTime} setWorkingTime={setWorkingTime} shorbreakTime={shorbreakTime} longBreakTime={longBreakTime} workingTime={workingTime}/>}/>
              <Route path='stats' element={<Stats darkmod={darkmod}/>}/>
            </Route>
            <Route path='/login' element={<h1>login page</h1>}/>
            <Route path='/register' element={<h1>register page</h1>}/>
            <Route path='*' element={<h1> PAGE NOT FIND</h1>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
