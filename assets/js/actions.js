import {Socket} from 'phoenix';

export function connectToChannel() {
  return dispatch => {
    const socket = new Socket('/socket');
    socket.connect();
    const channel = socket.channel(`device:lobby`);

    channel.on('button_one_pressed', () => {
      dispatch({type: 'PICK_UP'});
      window.setTimeout(() => dispatch({type: 'REMOVE'}), 5000);
    });

    channel.on('button_two_pressed', () => {
      dispatch({type: 'DELIVERED'});
      window.setTimeout(() => dispatch({type: 'REMOVE'}), 5000);
    });

    channel.join().receive('ok', () => {
      dispatch({type: 'LIVE_UPDATE_ON', channel});
      window.setTimeout(() => dispatch({type: 'REMOVE'}), 5000);
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
