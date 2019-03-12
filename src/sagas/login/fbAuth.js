import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import { Facebook } from 'expo';
import Actions from '../../actions';

function* fetchFBAuth() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = yield Facebook.logInWithReadPermissionsAsync('2275521712468554', {
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      yield put(Actions.setAccessToken(token));
      // Get the user's name using Facebook's Graph API
      const response = yield fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      const json = yield response && response.json();
      if (json) {
        yield put(Actions.fetchFBAuthSuccess(json));
      } else {
        yield put(Actions.fetchFBAuthFail(json));
      }
    }
  } catch ({ message }) {
    yield put(Actions.fetchFBAuthFail(message));
  }
}

function* watchFBAuth() {
  yield takeLatest(Actions.FETCH_FB_AUTH, fetchFBAuth);
}

export default function* fbAuth() {
  yield all([fork(watchFBAuth)]);
}
