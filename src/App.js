import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <Router>
        <Home path='/' />
      </Router>
    </div>
  )
}
