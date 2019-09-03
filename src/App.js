import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'

import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Inscription } from './pages/Incription'
import { Competition } from './pages/Competition'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <LocationProvider>
        <Router>
          <Home path='/inicio' />
          <Inscription path='/' />
          <Competition path='/sorteo' />
        </Router>
      </LocationProvider>
    </div>
  )
}
