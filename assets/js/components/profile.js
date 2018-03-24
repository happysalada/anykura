import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';


class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static"><Toolbar><Typography>Profile</Typography></Toolbar></AppBar>
        <div style={{textAlign: 'cetner'}}><Avatar alt="profile-pic" style={{width: '20%'}} src="https://placehold.it/200x200" /></div>
      </React.Fragment>
    );
  }
}

export default withRouter(Profile);
