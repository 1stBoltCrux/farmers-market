import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return(
    <div className='nav-wrapper'>
      <div className='navButtons'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/schedule"><p>Schedule</p></Link>
        <Link to="/seasons"><p>Seasons</p></Link>
      </div>
    </div>
  );
}

export default Nav;
