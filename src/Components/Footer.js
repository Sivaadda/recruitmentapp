import React from 'react';

const Footer = () => {
  return (
    <div className="footer-dark d-flex flex-column justify-content-end ">
      <footer className="footer bg-dark text-light p-2 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                <a href="#" className='text-white'> About Dream Job</a>
                </li>
                <li>
                  <a href="#"className='text-white'>Find Job</a>
                </li>
                <li>
                  <a href="#" className='text-white'>Sign Ups</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#" className='text-white'>Company</a>
                </li>
                <li>
                  <a href="#" className='text-white'>Team</a>
                </li>
                <li>
                  <a href="#" className='text-white'>Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Dream Job</h3>
              <p>
              Dream Job streamlines the job search and hiring process by leveraging automation, assessments, and effective communication. It aims to make the job search and hiring experience efficient and more successful for both job seekers and recruiters.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="text-center">
            Dream Job © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
