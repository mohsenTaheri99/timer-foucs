
import './App.css';
import {
  BrowserRouter , Routes,
  Route,
} from "react-router-dom";

import Navbar from './pages/Navbar/Navbar';
import Timer from './pages/Timer/Timer';
import { useState } from 'react';


function App() {
  const [shorbreakTime , setShorBreakTime] = useState(2);
  const [longBreakTime , setLongBreakTime] = useState(10);
  const [workingTime , setWorkingTime] = useState(15);
  const [shortBreakinterval , setShortBreakInterval] = useState(3);
  const [season , setSeason] = useState(1);
  const [shortBreakCount , setShortBreakCount] = useState(0);
  const [isWorking , setIsWorking] = useState(true);

  function timeEnd(){
    setIsWorking((s)=>!s)
    if(isWorking){
      
    }else{
      setSeason((s)=> s+1 )
      if(shortBreakCount === shortBreakinterval) setShortBreakCount(0)
      else setShortBreakCount((s)=> s+1)
    }
    console.log("season:" + season)
  }

 
  return (
    <div className="App">

      <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Navbar/>} >
              <Route path='/' element={<Timer longBreakTime={longBreakTime} shorbreakTime={shorbreakTime}  timeEnd={timeEnd} workingTime={workingTime} isWorking={isWorking} shortBreakCount={shortBreakCount} shortBreakinterval={shortBreakinterval} />}/>
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
