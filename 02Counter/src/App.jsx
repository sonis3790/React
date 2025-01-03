import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] =  useState(10)

  // let counter = 10

  const addValue = () => {
    counter += 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (

    <>
  <h1>Chai aur React</h1>
  <h2>Counter Value: {counter}</h2>

  <button onClick={addValue}>Add Value{counter}</button>
  <br />
  <button onClick={removeValue}>Remove Value{counter}</button>
  <p>Footer : {counter}</p>
    </>
  )
}

export default App
