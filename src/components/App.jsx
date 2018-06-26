import React from 'react';
import Nav from './Nav.jsx';
import Schedule from './Schedule.jsx';
import Seasons from './Seasons.jsx';
import './app.css';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path='/' component={Nav}/>
        <Route exact path='/schedule' component={Schedule}/>
        <Route exact path='/seasons' component={Seasons}/>
      </Switch>
    </div>
  );
}

export default App;
