import React from 'react';
import './home.css'
import Nav from './Nav.jsx'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {isAltTitleShowing: false}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      isAltTitleShowing: !prevState.isAltTitleShowing
    }));
  }
  render(){
    let altTitle = <h1>Aviary Organics</h1>;
    if (this.state.isAltTitleShowing === true){
      altTitle = <h1>Also Avery Organics</h1>;
    } else {
      altTitle = <h1>Avery Organics</h1>;
    }

    return(
      <div className='home-wrapper'>
        <Nav/>
        <p onClick={this.handleClick}>click me!</p>
        <div className='home-content'>
          {altTitle}
        </div>



      </div>
    );

  }
}

export default Home;
