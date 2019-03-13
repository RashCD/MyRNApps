export const NAME = 'PERSIST';

export const SET_ACCESS_TOKEN = `${NAME}/SET_ACCESS_TOKEN`;
export const CLEAR_ACCESS_TOKEN = `${NAME}/CLEAR_ACCESS_TOKEN`;
export const GET_ACCESS_TOKEN = `${NAME}/GET_ACCESS_TOKEN`;

export const getAccessToken = store => store[NAME].accessToken;

export const setAccessToken = data => ({
  type: SET_ACCESS_TOKEN,
  data,
});

export const clearAccessToken = () => ({
  type: CLEAR_ACCESS_TOKEN,
});
