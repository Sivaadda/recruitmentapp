import React from 'react';
import { Link } from 'react-router-dom';
import pngegg from './pngegg.png'
import logoo from './logoo.png'


const SignUp = () => {
  return (
    <div className="container mt-1">
        <Link to="/">
          <img
            src={logoo}
            width="200"
            height="60"
            
            className="d-inline-block align-top"
          />
          {/* Replace "your-logo.png" with the path to your logo image */}
          
        </Link>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Create Your Profile</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mb-3">or</div>
              <button className="btn btn-outline-dark w-100 mb-3">
                Sign Up with Google
              </button>
              <div className="text-center">
                Already have an account?{' '}
                <Link to="/login">Log in here</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Optional image for larger screens */}
        <div className="col-lg-4 d-none d-lg-block m-5">
          <img
            src={pngegg}
            alt="Sign Up Image"
            className="img-fluid m-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
