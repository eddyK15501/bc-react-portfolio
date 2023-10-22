/* eslint-disable no-unused-vars */
import React from 'react'
import './sass/App.scss'
import Navbar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App