import React from 'react'
import './stats.css'
import Statistics from '../../Component/statistics/Statistics'
function Stats({darkmod}) {
  return (
    <div className='mian-cuntener-stats'>
        <div className="stats-header" style={darkStyle(darkmod)}>
            <h3>آمار</h3>
        </div>
        <div className="stats" style={darkStyle(darkmod)}>
            <Statistics darkmod={darkmod}/>
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
export default Stats