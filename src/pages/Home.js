import React from 'react'
import { CounterDown } from '../components/CounterDown'

export const Home = () => {
  const date = 'Aug 29 2019 09:20:53 GMT-0500'
  return <CounterDown deadline={date} />
}
