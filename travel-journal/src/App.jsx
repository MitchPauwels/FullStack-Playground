import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
const card = data.map(item => {
  return(
    <Card
     key={item.id}
     {...item} 

     />
  )
})

  return (
    <>
    <div className="App">
      <Navbar />
      {card}
    </div>
    </>
  )
}

export default App
