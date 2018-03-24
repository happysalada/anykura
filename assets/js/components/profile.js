import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import Notifi from './notification';




class Profile extends Component {

    state = {
        open: true
    }

    vertical = 'bottom';
    horizontal = 'right';


    render() {
        return (
            <React.Fragment>
                <AppBar color='primary' position='static'>
                    <Toolbar>
                        <span style={{flex: 1}}><Button color='secondary' onClick={() => {console.log(this.state)}}>Logout</Button></span><Typography style={{textAlign: 'center'}} variant='title' color='secondary'>Profile</Typography><span style={{flex: 1}}></span>
                        </Toolbar></AppBar>
                <div style={{textAlign: 'center'}}><img alt='profile-pic' src='https://placehold.it/125x125' style={{borderRadius: '10px', marginTop: '15px', border: '2px solid #d50000'}} /></div>
                <Snackbar color='primary' anchorOrigin={{ vertical: this.vertical, horizontal: this.horizontal }}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={() => {this.setState((prevState) => {return {open: !prevState.open}});}} children={<Notifi close={() => {this.setState({open: false});}}/>} />
            </React.Fragment>
        );
    }
}

export default withRouter(Profile);