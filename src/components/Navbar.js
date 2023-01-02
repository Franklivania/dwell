import React from 'react'
import '../sass/Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className='navbar'>
        <img src={logo} alt={'company logo'} />

        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Rent</Link>
            <Link to='/' className='link'>Agent</Link>
            <Link to='/' className='link'>About us</Link>
            <Link to='/' className='link'>Contact us</Link>
        </nav>

        <nav className="social">
            <a href="/" rel='noreferrer'><i class="fa-brands fa-facebook fa-2x"></i></a>
            <a href="/" rel='noreferrer'><i class="fa-brands fa-instagram fa-2x"></i></a>
            <a href="/" rel='noreferrer'><i class="fa-brands fa-twitter fa-2x"></i></a>
        </nav>
    </header>
  )
}

export default Navbar