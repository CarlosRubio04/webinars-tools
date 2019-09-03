import React, { useState } from 'react'
import { Counter } from './styles'
import loadingWebinar from '../../assets/loading.png'

export const CounterDown = (deadline) => {
  // console.log(deadline)
  const [acTime, setAcTime] = useState([])
  const [start, setStart] = useState(false)
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
  const timerUpdate = setInterval(() => {
    // console.log(Math.floor(acTime.remainTime))
    if (Math.floor(acTime.remainTime) <= 1) {
      clearInterval(timerUpdate)
      setStart(true)
    } else {
      setAcTime(getRemainingTime(deadline))
    }
  }, 1000)
  return (
    <div>
      {
        start
          ? <Counter>
            <img src={loadingWebinar} />
            <h4>Iniciando Transmisión ...</h4>
          </Counter>
          : <Counter>
            <img src={loadingWebinar} />
            <h4>Nuestro Webinar Empezará en</h4>
            <div className='Counter-container'>
              <div className='item'>{ acTime ? acTime.remainHours : '00' } <span>-</span></div>
              <div className='item'>{ acTime ? acTime.remainMinutes : '00' } <span>-</span></div>
              <div className='item'>{ acTime ? acTime.remainSeconds : '00' }</div>
            </div>
          </Counter>
      }
    </div>
  )
}
