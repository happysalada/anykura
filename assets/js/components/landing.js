import React, { Component } from 'react';
import { BrowserView, MobileView, isMobile, isBrowser } from 'react-device-detect';
import Icon from 'material-ui/Icon';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';

class Landing extends Component {
  textStyles = {
    padding: '8px'
  }

  state = {
    username: '',
    password: ''
  }

  submitForm() {
    if (this.state.username === 'user' && this.state.password === 'password') {
      this.props.history.push('profile');
      console.log('nav to profile');
    }
  }

  render() {
    return (
      <React.Fragment>
        <MobileView device={isMobile}>
          <AppBar position='static'><Toolbar>Anykura <Button onClick={() => {console.log(this.props)}}>get props</Button> <Button onClick={() => {console.log(this.state)}}>get state</Button></Toolbar></AppBar>
          <Paper style={{width: '96%', margin: '10px auto', padding: '5px', boxSizing: 'border-box'}}>
            <form onSubmit={(event) => {event.preventDefault(); this.submitForm()}}>
              <div style={this.textStyles}>
                <TextField fullWidth onChange={(event) => {this.setState({username: event.target.value})}}  label='Username' />
              </div>
              <div style={this.textStyles}>
                <TextField fullWidth onChange={(event) => {this.setState({password: event.target.value})}} label='Password' />
              </div>
              <Button style={{margin: '10px 5px'}} color='primary' type='submit' variant='raised'>Login</Button>
              <Button style={{margin: '10px 5px'}} color='secondary' type='submit' variant='raised'>Signup</Button>
              <hr/>
              <Button fullWidth style={{backgroundColor: '#3b5998'}} color='primary' variant='raised'>Login with Facebook</Button>
            </form>
          </Paper>
        </MobileView>
        <BrowserView device={isBrowser}>
        </BrowserView>

      </React.Fragment>
    )
  }
}

export default withRouter(Landing);
