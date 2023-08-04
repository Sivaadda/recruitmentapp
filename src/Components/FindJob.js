import React from 'react';
import { Link } from 'react-router-dom';

const FindJob = ({ isAuthenticated }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-body p-5">
              {!isAuthenticated ? (
                <>
                  <h2 className="text-center mb-4">
                    Please Login before applying for a job
                  </h2>
                  <div className="text-center">
                    <Link to="/Login">Log in here</Link> or{' '}
                    <Link to="/Signup">Sign up here</Link> to continue.
                  </div>
                </>
              ) : (
                <>
                  {/* Your actual FindJob content here */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
