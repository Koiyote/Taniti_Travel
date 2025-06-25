import React, { useState } from 'react';
import './App.css';
import About from './fragments/About';
import Travel_Destination from './fragments/Travel_Destination';
import Navbar from './fragments/Navbar';
import FrontPage from './fragments/FrontPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  

  return (
      

  <div
  className="container-fluid d-flex justify-content-center align-items-center position-relative"
  style={{
    backgroundImage: `url('beach-picture.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<FrontPage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/travel_destination" element={<Travel_Destination/>}/>  
  </Routes> 
  
</div>

  );
}

export default App;
