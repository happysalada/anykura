import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
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
                <AppBar position='static'><Toolbar><Typography>Profile</Typography><Button onClick={() => {console.log(this.state)}}>get state</Button></Toolbar></AppBar>
                <div style={{textAlign: 'center'}}><Avatar alt='profile-pic' style={{width: '20%'}} src='https://placehold.it/200x200' /></div>
                <Snackbar color='primary' anchorOrigin={{ vertical: this.vertical, horizontal: this.horizontal }}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={() => {this.setState((prevState) => {return {open: !prevState.open}});}} children={<Notifi close={() => {this.setState({open: false});}}/>} />
            </React.Fragment>
        );
    }
}

export default withRouter(Profile);