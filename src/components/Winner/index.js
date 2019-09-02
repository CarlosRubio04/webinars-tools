import React from 'react'
import { User } from './styles'

export const Winner = ({ winner }) => {
  return (
    <User>
      <h2>{winner.name}</h2>
      <h4>{winner.company}</h4>
    </User>
  )
}
