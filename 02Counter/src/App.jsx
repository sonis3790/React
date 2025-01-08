import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setCounter] =  useState(10)

  // let counter = 10

  const addValue = () => {
    // counter += 1
    // setCounter(counter + 1)
    // setCounter(counter + 1) /// they not work because using bunch of setcounter only one
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)

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
