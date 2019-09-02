import React, { useState } from 'react'
import { Counter } from './styles'

const getRemainingTime = ({ deadline }) => {
  const now = new Date()
  const remainTime = (new Date(deadline) - now + 1000) / 1000
  const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
  const remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2)
  const remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2)
  const remainDays = Math.floor(remainTime / (3600 * 24))
  const data = {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
  return data
}

export const CounterDown = (deadline) => {
  // console.log(deadline)
  const [acTime, setacTime] = useState([])
  const [start, setStart] = useState(false)
  const timerUpdate = setInterval(() => {
    setacTime(getRemainingTime(deadline))
    // console.log(acTime)
    if (acTime.remainTime <= 1) {
      clearInterval(timerUpdate)
      setStart(true)
    }
  }, 1000)
  return (
    <div>
      {
        start
          ? <p>Iniciando Transmisión...</p>
          : <Counter>
            <h4>Nuestro Webinar Empezará en</h4>
            <div className='Counter-container'>
              <div className='item'>{ acTime.remainHours } <span>-</span></div>
              <div className='item'>{ acTime.remainMinutes } <span>-</span></div>
              <div className='item'>{ acTime.remainSeconds }</div>
            </div>
          </Counter>
      }
    </div>
  )
}
