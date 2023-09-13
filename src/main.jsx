import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PokeApp } from './components/PokeApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>,
)
