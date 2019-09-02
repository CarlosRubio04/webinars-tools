import React from 'react'
import { CounterDown } from '../components/CounterDown'

export const Home = () => {
  const date = 'Sep 03 2019 10:00:00 GMT-0500'
  return (
    <div className='Home'>
      <div className='Home_Container'>
        <CounterDown deadline={date} />
      </div>
    </div>
  )
}
