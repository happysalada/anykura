import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Notifi from './notification';
import { connectToChannel } from '../actions';
class Profile extends Component {

    state = {
        open: true,
        currentItems: []

    }

    vertical = 'bottom';
    horizontal = 'right';

    componentDidMount() {
      const {dispatch} = this.props;
      this.props.connectToChannel();
      // this.props.connectToChannel();
      fetch('https://junction-tokyo.minikura.com/v1/minikura/item?oem_key=a58f6f263c8b5e6b')
        .then(response => response.json())
        .then(({status, results}) => {
          if(status == 1) this.setState({currentItems: results});
          console.log({status, results});
        }).catch(error => console.log(error));
    }


    render() {
        let items = null;
        if (this.state.currentItems) {
            items = this.state.currentItems.map((item) => {
                let storage = null;
                switch (item.storage_status) {
                    case 'non_storage':
                        storage = (<span>Not Stored</span>)
                        break;
                    default:
                        storage = (<span>Unknown</span>)
                }
                return (
                    <ListItem button key={item.item_id}>{storage}</ListItem>
                )
            });
        }
        return (
            <React.Fragment>
                <AppBar color='primary' position='static'>
                    <Toolbar>
                        <span style={{flex: 1}}><Button color='secondary' onClick={() => {console.log(this.state)}}>Logout</Button></span><Typography style={{textAlign: 'center'}} variant='title' color='secondary'>Profile</Typography><span style={{flex: 1}}></span>
                    </Toolbar>
                </AppBar>
                <div style={{textAlign: 'center'}}>
                    <img alt='profile-pic' src='https://placehold.it/125x125' style={{borderRadius: '10px', marginTop: '15px', border: '2px solid #d50000'}} />
                    <Typography color='primary'>{this.state.user}</Typography>
                </div>
                <Snackbar
                color='primary'
                anchorOrigin={{ vertical: this.vertical, horizontal: this.horizontal }}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={() => {this.setState((prevState) => {return {open: !prevState.open}});}}
                children={<Notifi title={this.props.notifyTitle} message={this.props.notifyMessage} close={() => {this.setState({open: false});}}/>} />
                <List>
                <ListItem button>
                        <div style={{width: '75px', border: '2px solid #d50000'}}></div>
                </ListItem>
                    {items}
                </List>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.notifications[0]) {
        return {
            notifyTitle: state.notifications[0].title,
            notifyMessage: state.notifications[0].message,
        }
    } else {
        return {
            notifyTitle: '',
            notifyMessage: '',
        }
    }
    
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectToChannel: () => dispatch(connectToChannel())
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Profile);
