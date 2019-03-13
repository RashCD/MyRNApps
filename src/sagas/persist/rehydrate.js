import { takeLatest, all, fork, put, select } from 'redux-saga/effects';
import Actions from '../../actions';

function* rehydrate(data) {
  if (data && data.key && data.payload) {
    const { key } = data;
    if (key === 'main') {
      yield put(Actions.finishRehydrateData());
    }
  } else {
    yield put(Actions.finishRehydrateData());
  }
}

function* watchRehydrate() {
  yield takeLatest('persist/REHYDRATE', rehydrate);
}

export default function* persist() {
  yield all([fork(watchRehydrate)]);
}
