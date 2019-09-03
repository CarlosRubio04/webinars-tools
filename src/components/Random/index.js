import React, { useState } from 'react'
import firebase from '../../firebase'

import { Winner } from '../Winner'
import { RandomContainer } from './styles'

import normal from '../../assets/static.png'
import loadingUser from '../../assets/loading.png'

export const Random = () => {
  const [winner, setWinner] = useState('')
  const [loading, setLoading] = useState(false)
  let data = []
  const nameRef = firebase.database().ref('/participants/')
  nameRef.on('value', snapshot => {
    data = Object.values(snapshot.val())
  })

  const generateNumber = () => {
    setLoading(true)
    const filterUsers = data.filter(user => user.jobTitle !== 'Otro' && user.employs !== '1-10' && user.country.toLowerCase() !== 'venezuela' | 've' | 'vzla' | 'vza')
    console.log(filterUsers)
    const to = filterUsers.length
    const number = Math.floor(Math.random() * (1 - to + 1) + to)
    const user = filterUsers[number]
    console.log(number, user)
    setTimeout(() => setWinner(user), 2000)
  }

  if (winner) {
    return (
      <Winner winner={winner} />
    )
  }
  if (loading) {
    return (
      <RandomContainer>
        <img src={loadingUser} />
      </RandomContainer>
    )
  }
  return (
    <RandomContainer>
      <img src={normal} />
      <button className='Main-Button' onClick={generateNumber}>Iniciar Sorteo</button>
    </RandomContainer>
  )
}
