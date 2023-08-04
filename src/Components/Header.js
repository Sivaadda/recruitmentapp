import React from 'react';
import { Link } from 'react-router-dom';
import logoo from './logoo.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
        <Link to="/">
          <img
            src={logoo}
            width="200"
            height="60"
            
            className="d-inline-block align-top"
          />
          {/* Replace "your-logo.png" with the path to your logo image */}
          
        </Link>

        <div className='d-flex flex-row justify-content-end'>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
