
import './App.css'
import Card from './components/Card'

function App() {
  
 let myObj = {
     username : "shourya",
      age : 21
   }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>TailWind CSS</h1>
      <Card username = "Chai aur code" btnText="click me"/>
      <Card username = "hitesh" btnText="visit me"/>
    </>
  )
}

export default App
