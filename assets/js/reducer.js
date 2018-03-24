const initialState = {
  notificationOpen: false,
  notifications: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LIVE_UPDATE_ON':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your request is in progress',
            message: 'Thank you for your business'
          }
        ],
      };
    case 'PICK_UP':
      console.log(state.notifications);
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your item has been picked up by our delivery person',
            message: 'We are moving at the speed of light'
          }
        ],
      };
    case 'DELIVERED':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your item has arrived',
            message: 'We will update you on the conditions of storage'
          }
        ],
      };
    case 'REMOVE':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: state.notifications.slice(1),
      };
    case 'LIVE_UPDATE_OFF':
      return initialState;
    default:
      return state;
  }
}
