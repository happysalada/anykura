import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class ItemStatus extends Component {
    render() {
        return (
            <React.Fragment>
            <AppBar color='primary' position='static'>
                    <Toolbar>
                        <span style={{ flex: 1 }}><Button color="secondary" onClick={() => {
                            this.props.history.goBack();
                        }}>Back</Button></span><Typography style={{ textAlign: 'center' }} variant="title" color="secondary">Status</Typography><span style={{ flex: 1 }}></span>
                    </Toolbar>
                </AppBar>
                <div>
                    <img alt='placeholder' style={{height: '50%', width: '100%'}} src='http://placehold.it/1200x800' />
                </div>
                <div>
                    <Typography style={{width: '50%', marginTop: '30px', display: 'inline-block', textAlign: 'center'}}>{this.props.currentItem.common01}</Typography>
                    <Typography style={{marginTop: '15px', width: '50%', display: 'inline-block', textAlign: 'center'}}>{this.props.currentItem.common06}</Typography>
                    <span style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>{this.props.currentItem.storage}</span>
                    <Typography style={{width: '50%', marginTop: '30px', display: 'inline-block', textAlign: 'center'}}>&yen;300 / month<span style={{display: 'block'}}>Exchange for Cash?</span></Typography>
                    <img alt='placeholder' style={{width: '50%', marginTop: '20px', padding: '0'}} src={require('../staticassets/time.png')} />
                    <img alt='placeholder' style={{width: '50%', marginTop: '20px', padding: '0'}} src={require('../staticassets/humid.png')} />
                    <img alt='placeholder' style={{width: '50%', margin: '0', padding: '0'}} src={require('../staticassets/temp.png')} />
                    <img alt='placeholder' style={{width: '50%', margin: '0', padding: '0'}} src={require('../staticassets/direction.png')} />
                    <Button
                    fullWidth
                    style={{height: '55px', backgroundColor: '#59ff8a', position: 'absolute', bottom: '55px', left: '0', borderRadius: '0'}}
                    onClick={() => {this.updateItem()}}>Contact the Host</Button>
                    <Button
                    fullWidth
                    style={{height: '55px', backgroundColor: '#ffcc66', position: 'absolute', bottom: '0', left: '0',  borderRadius: '0'}}
                    onClick={() => {this.updateItem()}}>Call it Back</Button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentItem: state.viewingItem,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      stored: () => dispatch({type: 'CLOSE_SNACK'})
    };
  };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ItemStatus);