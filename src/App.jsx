
import './App.css';
import {
  BrowserRouter , Routes,
  Route,
} from "react-router-dom";

import Navbar from './pages/Navbar/Navbar';
import Timer from './pages/Timer/Timer';
import { useState } from 'react';


function App() {
  const [shorbreakTime , setShorBreakTime] = useState(5 * 60 );
  const [longBreakTime , setLongBreakTime] = useState(20 * 60 );
  const [workingTime , setWorkingTime] = useState(25* 60 );
  const [shortBreakinterval , setShortBreakInterval] = useState(4);
  const [season , setSeason] = useState(1);
  const [shortBreakCount , setShortBreakCount] = useState(0);
  const [isWorking , setIsWorking] = useState(true);

  function timeEnd(time){
    setIsWorking((s)=>!s)
    if(isWorking){
        console.log(workingTime - time )
    }else{
      setSeason((s)=> s+1 )
      if(shortBreakCount === shortBreakinterval) setShortBreakCount(0)
      else setShortBreakCount((s)=> s+1)
    }
  }

 
  return (
    <div className="App">

      <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Navbar/>} >
              <Route path='/' element={<Timer longBreakTime={longBreakTime} shorbreakTime={shorbreakTime}  timeEnd={timeEnd} workingTime={workingTime} isWorking={isWorking} shortBreakCount={shortBreakCount} shortBreakinterval={shortBreakinterval} season={season}/>}/>
              <Route path='setting' element={<h3>setting</h3>}/>
              <Route path='account' element={<h3>account</h3>}/>
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
