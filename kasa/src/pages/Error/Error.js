import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='errorContainer'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='errorLink' to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error