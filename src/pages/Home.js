import React from 'react'
import { CounterDown } from '../components/CounterDown'

export const Home = () => {
  const date = 'Aug 30 2019 09:20:53 GMT-0500'
  return (
    <div className='Home'>
      <div className='Home_Container'>
        <CounterDown deadline={date} />
      </div>
    </div>
  )
}
