import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with shourya</h1>
      <Login  />
      <Profile />
    </UserContextProvider>
  )
}

export default App
