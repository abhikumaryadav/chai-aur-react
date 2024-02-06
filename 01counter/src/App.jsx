import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
//  let counter = 5

 const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
 }
 const removeValue = () => {
  setCounter(counter = counter - 1)
 }
  return (
    <>
     <h1>Chai aur code</h1>
     <h1>Counter value is: {counter}</h1>


     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
    <p>footer: {counter}</p>
    <button
    onClick={removeValue}
    >remove value{counter}</button>   
    </>
  )
}

export default App
