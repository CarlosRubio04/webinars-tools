import React from 'react'
import { Nav } from './styles'
import logo from '../../assets/logo.svg'

export const NavBar = () => {
  return (
    <Nav>
      <div className='Nav-Container'>
        <img src={logo} />
      </div>
    </Nav>
  )
}
