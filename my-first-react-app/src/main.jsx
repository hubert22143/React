import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Kebsik } from './YummyFood.jsx'
import AnimalApp from './AnimalApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting/>
    <AnimalApp/>
  </React.StrictMode>,
)
