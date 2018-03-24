import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Profile from './components/profile';
import LandingSlide from './components/landingSlide';
import AddItem from './components/additem';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/' exact component={LandingSlide} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/additem' exact component={AddItem} />
      </React.Fragment>
    );
  }
}

export default MainApp;
