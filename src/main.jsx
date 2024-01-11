import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './Logo.jsx'
import './index.css'
import Contenedor from './Contenedor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />  
    <Contenedor />

  </React.StrictMode>,
)
