/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './sass/App.scss'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }, [])

  return (
    <div className="main-container">
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default App