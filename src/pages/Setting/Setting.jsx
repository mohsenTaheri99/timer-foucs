import React from 'react'
import './setting.css'
function Setting({setShorBreakTime, setLongBreakTime ,setWorkingTime, shorbreakTime, longBreakTime, workingTime}) {
  return (
    <div className='main-cuntener'>
        <div className='setting-cuntener'>
            <div className="settings">
                <div className="range-inputs">
                    <div className="range">
                        <span>کار</span>
                        <input type="range" max={60*60} min={15*60} step={5*60} value={workingTime} onChange={(e)=>setWorkingTime(e.target.value)}/>
                        <div className='input-show' >{(workingTime/60)}</div>
                    </div>
                    <div className="range">
                        <span>استراحت کوتاه</span>
                        <input type="range" max={10*60}  min={1*60} step={1*60} value={shorbreakTime} onChange={(e)=>setShorBreakTime(e.target.value)}/>
                        <div className='input-show'>{shorbreakTime/60}</div>
                    </div>
                    <div className="range">
                        <span>استراحت بلند</span>
                        <input type="range" max={60*60} min={10*60} step={5*60}  value={longBreakTime} onChange={(e)=>setLongBreakTime(e.target.value)}/>
                        <div className='input-show'>{longBreakTime/60}</div>
                    </div>
                </div>
                <div className="tagles-setting">
                    <div className="tagle">
                        <span>تم تاریک</span>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="tagle">
                        <span>تم تاریک</span>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="tagle">
                        <span>تم تاریک</span>
                        <input type="checkbox" name="" id="" />
                    </div>                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting