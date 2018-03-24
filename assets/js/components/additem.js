import React, {Component} from 'react';
import {BrowserView, MobileView, isMobile, isBrowser} from 'react-device-detect';
import {withRouter} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';

class AddItem extends Component {
  render() {
    return <React.Fragment>
      <MobileView device={isMobile}>
        <AppBar position="static">
          <Toolbar>
                  Anykura <Button onClick={() => {
              console.log(this.props);
            }}>
                    get props
            </Button> <Button onClick={() => {
              console.log(this.state);
            }}>
                    get state
            </Button>
          </Toolbar>
        </AppBar>
        <Paper style={{width: '96%', margin: '10px auto', padding: '5px', boxSizing: 'border-box'}}>
          <form onSubmit={event => {
            event.preventDefault();
            this.submitForm();
          }}>
            <div style={this.textStyles}>
              <TextField fullWidth onChange={event => {
                this.setState({username: event.target.value});
              }} label="Username" />
            </div>
            <div style={this.textStyles}>
              <TextField fullWidth onChange={event => {
                this.setState({password: event.target.value});
              }} label="Password" />
            </div>
            <Button style={{margin: '10px 5px'}} color="primary" type="submit" variant="raised">
                    Login
            </Button>
            <Button style={{margin: '10px 5px'}} color="secondary" type="submit" variant="raised">
                    Signup
            </Button>
            <hr />
            <Button fullWidth style={{backgroundColor: '#3b5998'}} color="primary" variant="raised">
                    Login with Facebook
            </Button>
          </form>
        </Paper>
      </MobileView>
      <BrowserView device={isBrowser} />
    </React.Fragment>;
  }
}

export default AddItem;
