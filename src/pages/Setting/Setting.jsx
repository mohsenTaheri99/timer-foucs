import React from 'react'
import './setting.css'
import Toggle from '../../Component/toggle/Toggle'
function Setting({ColorBG,setColorBG,setShorBreakTime, setLongBreakTime ,setWorkingTime, shorbreakTime, longBreakTime, workingTime ,setDarkmod ,darkmod,setShortBreakInterval,shortBreakinterval,setMute,mute}) {
    console.log(mute)
  return (
    <div className='main-cuntener'>
        <div className="setting-header bg-w-b" style={darkStyle(darkmod)}>
            <h3>تنظیمات</h3>
        </div>
        <div className='setting-cuntener' style={darkStyle(darkmod)}>
            <div className="settings">
                <div className="range-inputs anim-one" style={darkStyle(darkmod)}>
                    <div className="range" >
                        <span>کار</span>
                        <input type="range" max={60*60} min={15*60} step={5*60} value={workingTime} onChange={(e)=>setWorkingTime(Number(e.target.value))}/>
                        <div className='input-show' >{(workingTime/60)}</div>
                    </div>
                    <div className="range">
                        <span>استراحت کوتاه</span>
                        <input type="range" max={10*60}  min={1*60} step={1*60} value={shorbreakTime} onChange={(e)=>setShorBreakTime(Number(e.target.value))}/>
                        <div className='input-show'>{shorbreakTime/60}</div>
                    </div>
                    <div className="range">
                        <span>استراحت بلند</span>
                        <input type="range" max={60*60} min={10*60} step={5*60}  value={longBreakTime} onChange={(e)=>setLongBreakTime(Number(e.target.value))}/>
                        <div className='input-show'>{longBreakTime/60}</div>
                    </div>
                </div>
                <div className="tagles-setting anim-two" style={darkStyle(darkmod)}>
                    <div className="tagle">
                        <span>تم تاریک</span>
                        <Toggle callback={setDarkmod} darkmod={darkmod} style={darkToggle(darkmod)}/>
                    </div>
                    <div className="tagle">
                        <span>سکوت</span>
                        <Toggle style={darkToggle(darkmod)} callback={setMute} darkmod={mute}/>
                    </div>
                    <div className="tagle">
                        <span>تم تاریک</span>
                        <Toggle style={darkToggle(darkmod)}/>
                    </div> 
                                           
                </div>

                <div className="number-setting anim-three" style={darkStyle(darkmod)}>
                    <div className="number">
                        <span>فاصله استراحت بلند</span>
                        <input style={darkStyle(darkmod)} type="number"  name="interval" max={9} min={2} value={shortBreakinterval} onChange={(e)=>setShortBreakInterval(Number(e.target.value))} />
                    </div>                    
                </div>
                <div className="number-setting anim-four" style={darkStyle(darkmod)}>
                    <div className="number">
                        <span>رنگ پس زمینه</span>
                        <button style={{background:'#e0e1dd' ,borderColor:  ColorBG !== '#e0e1dd' ? '#00000040':'' }} onClick={()=> setColorBG("#e0e1dd")}/>
                        <button style={{background:'#778da9',borderColor:  ColorBG !== '#778da9' ? '#00000040': ''}} onClick={()=> setColorBG("#778da9")}/>
                        <button style={{background:'#1b263b',borderColor:  ColorBG !== '#1b263b' ? '#00000040':'' }} onClick={()=> setColorBG("#1b263b")}/>
                        <button style={{background:'#ffffee',borderColor:  ColorBG !== '#ffffee' ? '#00000040':'' }} onClick={()=> setColorBG("#ffffee")}/>

                    </div>                    
                </div>
            </div>
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
const darkToggle = (darkmod)=> {
    if(darkmod) return {
        boxShadow:'inset 0 0 5px rgba(37, 150, 190, 0.5) '
    }
    else return {}
  }
export default Setting