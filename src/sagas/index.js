import { all, fork } from 'redux-saga/effects';
import login from './login';
import persist from './persist';

export default function* root() {
  yield all([fork(login), fork(persist)]);
}
