import React from 'react';
import './home.css'
import Nav from './Nav.jsx'
function Home(){
  return(
    <div className='home-wrapper'>
      <Nav/>
      <div className='home-content'>
        <h1>Avery Organics</h1>
      </div>


    </div>
  );
}

export default Home;
