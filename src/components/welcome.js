import React from 'react';

import logo from '../images/books.jpeg';
import '../App.css';

class Welcome extends React.Component{
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome!</p>
        Hello Guys!!!
        <h6>Traverse different pages to know more about the concepts of React...</h6>
      </header>
    );
  }
}

export default Welcome; 