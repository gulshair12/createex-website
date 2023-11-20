import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';
import { ReactComponent as Brand } from '../SVG/logo.svg';
import '../Css/navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = link => {
    setActiveLink(link);
  };
  return (
    <nav className='mainnavbar'>
      <div className='navContainer'>
        <div className='logo'>
          <Brand style={{ width: '80%', height: '80%' }} />
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <Hamburger direction='left' size={32} color='green' duration={0.1} />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink
                to='/home'
                activeClassName='active'
                onClick={() => handleNavLinkClick('home')}
                style={{ color: activeLink === 'home' ? '#72b63c' : '#444444' }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/services'
                activeClassName='active'
                onClick={() => handleNavLinkClick('services')}
                style={{
                  color: activeLink === 'services' ? '#72b63c' : '#444444',
                }}
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/project'
                activeClassName='active'
                onClick={() => handleNavLinkClick('services')}
                style={{
                  color: activeLink === 'services' ? '#72b63c' : '#444444',
                }}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/team'
                activeClassName='active'
                onClick={() => handleNavLinkClick('services')}
                style={{
                  color: activeLink === 'services' ? '#72b63c' : '#444444',
                }}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Client'
                activeClassName='active'
                onClick={() => handleNavLinkClick('services')}
                style={{
                  color: activeLink === 'services' ? '#72b63c' : '#444444',
                }}
              >
                Client
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/About'
                activeClassName='active'
                onClick={() => handleNavLinkClick('services')}
                style={{
                  color: activeLink === 'services' ? '#72b63c' : '#444444',
                }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to='/ContactUs'>
                <button className='btn-submit'>Contact Us</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
