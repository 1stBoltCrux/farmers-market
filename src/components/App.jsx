import React from 'react';
import Nav from './Nav.jsx';
import Schedule from './Schedule.jsx';
import Seasons from './Seasons.jsx'
import './app.css';

function App(){
  return (
    <div className="app-wrapper">
      <Nav/>
      <Schedule/>
      <Seasons/>
    </div>
  );
}

export default App;
