import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Profile from './components/profile';
import LandingSlide from './components/landingSlide';

class MainApp extends Component {
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
