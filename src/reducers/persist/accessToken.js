import Actions from '../../actions';

export const getDefaultState = () => null;

function accessToken(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.SET_ACCESS_TOKEN:
      return action.data;
    case Actions.CLEAR_ACCESS_TOKEN:
      return null;
    default:
      return state;
  }
}

export default accessToken;
