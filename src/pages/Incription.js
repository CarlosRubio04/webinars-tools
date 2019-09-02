import React, { useState } from 'react'
import firebase from '../firebase'
import { Form } from '../components/Form'
import normal from '../assets/static.png'
import error from '../assets/error.png'
import notification from '../assets/notification.png'

export const Inscription = () => {
  const [success, setSuccess] = useState('')
  const nameRef = firebase.database().ref('/subscribers')
  const subscribeUser = (user) => {
    firebase.database().ref('/participants/').push(user)
    setSuccess(1)
  }
  const onSubmit = ({ email, company, jobTitle, employs }) => {
    // console.log(email, company, jobTitle, employs)
    nameRef.on('value', snapshot => {
      // console.log(snapshot.val())
      const subscribers = snapshot.val()
      const user = subscribers.filter(subscriber => subscriber.email === email)
      user.length === 1 ? subscribeUser({ ...user[0], company, jobTitle, employs }) : setSuccess(0)
    })
  }
  const NormalState = () => {
    return (
      <div className='Inscription-Header'>
        <img src={normal} />
        <h4>Completa el formulario para participar en el sorteo del módulo de Reconocimiento de Acsendo.</h4>
      </div>
    )
  }
  const ErrorSatate = () => {
    return (
      <div className='Inscription-Header'>
        <img src={error} />
        <h4>¡Lo sentimos! Si deseas participar en este sorteo tienes que estar registrado en el webinar de José Gatica. Aquí te puedes registrar: </h4>
        <a href='https://pages.acsendo.com/webinar-transformacion-digital-rrhh' target='_blank'>
          https://pages.acsendo.com/webinar-transformacion-digital-rrhh
        </a>
      </div>
    )
  }
  if (success === 1) {
    return (
      <div className='Inscription'>
        <div className='Inscription-Container'>
          <div className='Inscription-Header'>
            <img src={notification} />
            <h4>¡Felicidades! Ya quedaste registrado en el sorteo de una anualidad del módulo de Acsendo Flex.
              <br />  Debes estar muy atento porque al final del webinar se anunciará el ganador.
            </h4>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='Inscription'>
      <div className='Inscription-Container'>
        {
          success === 0
            ? <ErrorSatate />
            : <NormalState />
        }
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  )
}
