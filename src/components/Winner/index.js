import React from 'react'
import { User } from './styles'
import notification from '../../assets/notification.png'

export const Winner = ({ winner }) => {
  return (
    <User>
      <img src={notification} />
      <h2>{winner.name} <br /> <small>{winner.company}</small></h2>
      <p>
        ¡Felicidades! <br />
        Eres el ganador de una anualidad del módulo de Reconocimiento de Acsendo Flex para mejorar el clima laboral y el compromiso en tu empresa.
        <br /> <small>Nos pondremos en contacto para explicarte el proceso de implementación.</small>
      </p>
    </User>
  )
}
