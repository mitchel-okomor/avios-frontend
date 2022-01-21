import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light top-navbar'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item '>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link className='nav-link' to='/create'>
                Create Products
              </Link>
            </li>
          </ul>
          <div className='right mx-4'></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
