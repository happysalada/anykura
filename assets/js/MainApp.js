import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Profile from './components/profile';
import LandingSlide from './components/landingSlide';
import './App.css';
import '../node_modules/slick-carousel/slick/slick.css'; 
import '../node_modules/slick-carousel/slick/slick-theme.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/' exact component={LandingSlide} />
        <Route path='/profile' exact component={Profile} />
      </React.Fragment>
    );
  }
}

export default MainApp;
