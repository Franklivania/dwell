import React, { useState } from 'react'
import '../sass/Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className='navbar'>
        <img src={logo} alt={'company logo'} />

        <div className="nav">
          <nav>
              <Link to='/' className='link'>Home</Link>
              <Link to='/' className='link'>Rent</Link>
              <Link to='/' className='link'>Agent</Link>
              <Link to='/' className='link'>About us</Link>
              <Link to='/' className='link'>Contact us</Link>
          </nav>

          <nav className="social">
              <a href="/" rel='noreferrer'><i class="fa-brands fa-facebook"></i></a>
              <a href="/" rel='noreferrer'><i class="fa-brands fa-instagram"></i></a>
              <a href="/" rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
          </nav>
        </div>

        <div className="mobilemenu" onClick={() => setOpen(!open)}>
          <div className={`burger ${isOpen ? "burger--open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
            {open && (
            <div className="menu">
              <nav className='links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/' className='link'>Rent</Link>
                <Link to='/' className='link'>Agent</Link>
                <Link to='/' className='link'>About us</Link>
                <Link to='/' className='link'>Contact us</Link>
              </nav>

              <nav className="social">
                <a href="/" rel='noreferrer'><i class="fa-brands fa-facebook"></i></a>
                <a href="/" rel='noreferrer'><i class="fa-brands fa-instagram"></i></a>
                <a href="/" rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
              </nav>
            </div>
            )}
        </div>
    </header>
  )
}

export default Navbar