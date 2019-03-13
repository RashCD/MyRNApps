import Actions from '../../actions';

export const getDefaultState = () => ({ isDataRehydrated: false });

function rehydrate(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.FINISH_REHYDRATE_DATA:
      return {
        ...state,
        isDataRehydrated: true,
      };
    default:
      return state;
  }
}

export default rehydrate;
