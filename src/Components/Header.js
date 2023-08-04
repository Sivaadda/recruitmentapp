import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoo from './logoo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to="/">
            <img
              src={logoo}
              width="200"
              height="60"
              alt="Your Logo"
              className="d-inline-block align-top"
            />
          </Link>

          <button
            className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/findjob">
                  Find Job
                </Link>
              </li>
            </ul>
          </div>
          </div>
        
      </nav>
    </header>
  );
};

export default Header;
