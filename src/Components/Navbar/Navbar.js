import React from 'react'
import './Navbar.css'

const Navbar = props => (
  <nav className='navbar'>
    <ul className='navbar-nav'>
      { props.children }
    </ul>
  </nav>
)

export default Navbar
