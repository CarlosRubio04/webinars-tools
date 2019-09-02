import React, { useState } from 'react'
import firebase from '../../firebase'

import { Winner } from '../Winner'

export const Random = () => {
  const [winner, setWinner] = useState('')
  let data = []
  const from = 1
  let to = 1
  const nameRef = firebase.database().ref('/participants/')
  nameRef.on('value', snapshot => {
    data = Object.values(snapshot.val())
    to = data.length
  })

  const generateNumber = () => {
    const number = Math.floor(Math.random() * (from - to + 1) + to)
    const user = data[number]
    console.log(number, user)
    setWinner(user)
  }

  if (winner) {
    console.log(winner)
    return (
      <Winner winner={winner} />
    )
  }
  return (
    <button className='Main-Button' onClick={generateNumber}>Go</button>
  )
}
