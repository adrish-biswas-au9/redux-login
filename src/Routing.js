import React from 'react'
// import LoginComponent from './components/LoginComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
// import SignupComponent from './components/SignupComponent';
import {Route} from 'react-router-dom'
import Home from './container/Home'
import {BrowserRouter} from 'react-router-dom';

const Routing = () => {
    return (
        
        <BrowserRouter>
          <Route exact path='/' component={SignupComponent} />
          <Route path='/logincomponent' component={LoginComponent}/>
          <Route path="/home" component={Home}/>
        </BrowserRouter>
    );
  }

export default Routing;