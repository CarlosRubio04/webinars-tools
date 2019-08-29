import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Inscription } from './pages/Incription'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <Router>
        <Home path='/' />
        <Inscription path='/inscription' />
      </Router>
    </div>
  )
}
