import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../images/Logo.png'
import { fetchData } from '../utils/service'

const Header = () => {

  const [buy, setBuy] = useState([])

  useEffect(() => {
    fetchData('wp/v2/taxonomy-equipments?per_page=100&orderby=name&exclude', 'get').then(data => {
      setBuy(data)
    })
  }, [])

  return (
    <header >
      <div class='p-3 bg-dark text-white'>
        <div class='container'>
          <div class='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a
              to='/'
              class='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a>
            <ul class='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'  >
              <li>
                {' '}
                <Link
                  class='nav-link dropdown-toggle text-white'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false' >Buy
                </Link >
                <ul class='dropdown-menu ' aria-labelledby='dropdownMenu2'>
                  {buy.map(item => (
                    <li>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                {' '}
                <Link
                  class='nav-link dropdown-toggle text-white'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Sell
                </Link>
                <ul class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                  <li><button class='dropdown-item' type='button'>Created</button>
                  </li>
                  <li><button class='dropdown-item' type='button'>Updated</button>
                  </li>
                </ul>
              </li>
              <li class='nav-item '>
                <Link class='nav-link text-white' to='/rent'>
                  Rent
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link text-white' to='/about'>
                  About
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link text-white' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
            <div class='text-end'>
              <Link class='nav-link text-white' to='/signIn'>
                Sign In
              </Link>
            </div>
            <div class='text-end'>
              <Link class='nav-link text-white' to='/register'>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='container d-flex flex-wrap justify-content-center'>
          <div class='d-flex align-items-center mb-3 mb-lg-6 me-lg-auto text-dark text-decoration-none'>
            <img src={Logo} alt={'Logo'} alt='Machine Hub' />
          </div>
          <div class='col-12 col-lg-auto mb-0 mb-lg-3 mt-4'>
            New and used heavy machinery in Malaysia &amp; Asia
            <h3>Sign up today - it's Free!</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
