const initialState = {
  notificationOpen: false,
  notifications: [],
  currentItems: null,
  username: '',
  viewingItem: null,
  storedOpen: false
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
    case 'UPDATE_ITEMS':
      return {
        ...state,
        currentItems: action.items,
        username: action.items[0].oem_name
      }
    case 'UPDATE_VIEWING':
      return {
        ...state,
        viewingItem: action.item
      }
    case 'NO_ITEM':
      return {
        ...state,
        viewingItem: null
      }
    case 'CLOSE_SNACK':
      return {
        ...state,
        storedOpen: !state.storedOpen
      }
    default:
      return state;
  }
}
