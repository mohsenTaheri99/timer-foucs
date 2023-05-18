import React, { useState } from 'react'

function SecondsCounter(props) {
    const time =  props.time * 60
  return (
    <>
        {parseInt(time/60).toString().padStart(2,'0')}:{(time%60).toString().padStart(2,'0')}
    </>
  )
}

export default SecondsCounter