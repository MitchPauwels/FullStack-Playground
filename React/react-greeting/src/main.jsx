import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './components/Greeting'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting  name='Mitch'/>
  </React.StrictMode>,
)
