import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Sign up';
import Login from './Components/Login';
import FindJob from './Components/FindJob';

import HomePage from './Components/Home Page';

function App() {

  const isAuthenticated = false;
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />        
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/FindJob" element={<FindJob isAuthenticated={isAuthenticated} />} />
    </Routes>
      </BrowserRouter>
      
    {/* Your other content goes here */}
  </div>
  );
}

export default App;
