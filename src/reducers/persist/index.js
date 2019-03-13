import { combineReducers } from 'redux';
import accessToken from './accessToken';
import rehydrate from './rehydrate';

export default combineReducers({
  accessToken,
  rehydrate,
});
