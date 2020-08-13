import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Concept1 from './components/React_Redux/posts_pg';
import Concept2 from './components/React_Hooks/songs_pg';
import Concept3 from './components/React_Basics/todos_pg';
import Post from './components/React_Redux/post';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/pg1' component={Concept1}/>
            <Route path='/pg2' component={Concept2}/>
            <Route path='/pg3' component={Concept3}/>
            <Route path='/:post_id' component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 