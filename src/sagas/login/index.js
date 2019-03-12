import { all, fork } from 'redux-saga/effects';
import fbAuth from './fbAuth';

export default function* login() {
  yield all([fork(fbAuth)]);
}
