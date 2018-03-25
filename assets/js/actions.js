import {Socket} from 'phoenix';

export function connectToChannel() {
  return dispatch => {
    const socket = new Socket('/socket');
    socket.connect();
    const channel = socket.channel(`device:lobby`);

    channel.on('button_one_pressed', () => {
      console.log('button one pressed');
      dispatch({type: 'PICK_UP'});
    });

    channel.on('button_two_pressed', () => {
      dispatch({type: 'DELIVERED'});
    });

    channel.join().receive('ok', () => {
      dispatch({type: 'LIVE_UPDATE_ON', channel});
    });

    return false;
  };
}

export function leaveChannel(channel) {
  return dispatch => {
    if (channel) channel.leave();
    dispatch({type: 'LIVE_UPDATE_OFF'});
  };
}

export function updateItems() {
  return dispatch => {
    fetch('/api/minikura')
      .then(response => response.json())
      .then(({status, results}) => {
        if (status === '1') dispatch({
          type: 'UPDATE_ITEMS',
          items: results
        });
      })
      .catch(error => console.log(error));
  };
}
