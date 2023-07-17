import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar" class="navbar navbar-dark bg-primary">
        <Link to={`/`}><h1 class="navbar-brand">Página Inicial</h1></Link>
        
    </nav>
  )
}

export default NavBar