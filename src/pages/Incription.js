import React from 'react'
import firebase from '../firebase'
import { Form } from '../components/Form'

export const Inscription = () => {
  let success = true
  const nameRef = firebase.database().ref('/subscribers')
  const subscribeUser = (email) => firebase.database().ref('/participants/').push({ email })
  const onSubmit = ({ email, company, jobTitle, employs }) => {
    // console.log(email, company, jobTitle, employs)
    nameRef.on('value', snapshot => {
      // console.log(snapshot.val())
      const subscribers = snapshot.val()
      const user = subscribers.filter(subscriber => subscriber.email === email)
      user.length === 1 ? subscribeUser(email) : success = false
    })
  }
  return (
    <div className='Inscription'>
      <div className='Inscription-Container'>
        <h4>Completa el formulario para participar en el sorteo</h4>
        <Form onSubmit={onSubmit} success={success} />
      </div>
    </div>
  )
}
