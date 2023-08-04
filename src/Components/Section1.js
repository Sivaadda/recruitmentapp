import PP from './PP.png';
import { Link } from 'react-router-dom';
function Section1(){
    return(
        <div>
             <div
        className="background-image"
         
        style={{ backgroundImage: `url(${PP})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 text-center m-4">
              <h1 style={{ fontFamily: 'sans-serif' }} >Find Your Dream Job</h1>
              <p className="lead">
                In Software Engineers, Product Managers, Data Scientists, and more.
              </p>
              <p className="">
                Are you waiting for interview calls for more days? Don't need to wait now,
                you will get a reply in a few days.
              </p>
              <Link to="/Signup" className="btn btn-info mt-4 ">
                Apply for Job
              </Link>
              
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}
export default Section1;