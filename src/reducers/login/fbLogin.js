import Actions from '../../actions';

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function fbLogin(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.FETCH_FB_AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.FETCH_FB_AUTH_SUCCESS:
      return {
        isLoading: false,
        error: false,
        data: action.data,
      };
    case Actions.FETCH_FB_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default fbLogin;
