import React from 'react'
import { Link } from '@reach/router'
import { Nav } from './styles'
import logo from '../../assets/logo.svg'

export const NavBar = () => {
  return (
    <Nav>
      <div className='Nav-Container'>
        <Link to='/inicio'><img src={logo} /></Link>
        <ul>
          <li>
            <Link to='/'>Inscripción</Link>
          </li>
          <li>
            <Link to='/sorteo'>Sorteo</Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}
