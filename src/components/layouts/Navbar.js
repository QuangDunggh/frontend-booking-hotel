import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav navbar-expand-lg bg-body-tertirary px-5 shadow mt-5 sticky-top'>
      <div className='container-fluid'>
        <Link to={"/"}>
          <span className='hotel-color'>LakeSide Hotel</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls='navbarScroll'
          aria-expand="false"
          aria-label="Toggle navigation"
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarScroll">
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
            <li className='nav-item'>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar