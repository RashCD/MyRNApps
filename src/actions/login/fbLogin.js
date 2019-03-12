export const NAME = 'LOGIN';

export const FETCH_FB_AUTH = `${NAME}/FETCH_FB_AUTH`;
export const FETCH_FB_AUTH_SUCCESS = `${NAME}/FETCH_FB_AUTH_SUCCESS`;
export const FETCH_FB_AUTH_FAIL = `${NAME}/FETCH_FB_AUTH_FAIL`;

export const fetchFBAuth = () => ({
  type: FETCH_FB_AUTH,
});

export const fetchFBAuthSuccess = data => ({
  type: FETCH_FB_AUTH_SUCCESS,
  data,
});

export const fetchFBAuthFail = error => ({
  type: FETCH_FB_AUTH_FAIL,
  error,
});
