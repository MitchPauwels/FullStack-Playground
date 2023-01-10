import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'


function App() {
  const newCard = data.map(d => {
    return (
    <Card 
     key = {d.id}
     {...d}

    />
  )})
  return (
    <>
    <Navbar />
      <Hero />
    <div className="App">
      {newCard}
    </div>
    </>
  )
}

export default App
