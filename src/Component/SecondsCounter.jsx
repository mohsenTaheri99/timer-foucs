import React, { useState } from 'react'

function SecondsCounter(props) {
    const time =  props.time
  return (
    <div className={props.className}>
        {parseInt(time/60).toString().padStart(2,'0')}:{(time%60).toString().padStart(2,'0')}
    </div>
  )
}

export default SecondsCounter