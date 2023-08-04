import React from 'react';

import Header from './Header';

import Footer from './Footer';
import logoo from './logoo.png'
import Comment from './Comment';


import Section1 from './Section1';
import Section2 from './Section2';


const HomePage = () => {
  return (
    <div className="home-page">
        <Header/>
     <Section1/>

      <Section2/>

      
      <div className="container my-5">
        <div className="row text-center">
        <h3 className='text-dark '>More than 10,000 top companies</h3>
          <div className="col-md-12">
            <img src="http://4.bp.blogspot.com/-chFGAfCtfhw/VZ0a72nsmVI/AAAAAAAAACg/mBUDxmbOrlw/s1600/sustainability-commitment.png" alt="More than 100000 Top Companies" className="img-fluid rounded"  />
          </div>
        </div>
      </div>
      <Comment/>

    

       <Footer/>

    </div>
  );
};

export default HomePage;
