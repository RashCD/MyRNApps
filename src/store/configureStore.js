import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducers from '../reducers';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
};

const { PERSIST, ...otherReducers } = reducers;
const reducer = combineReducers({
  PERSIST: persistReducer(mainPersistConfig, PERSIST),
  ...otherReducers,
});

/* global __DEV__ */
if (__DEV__) {
  const excludedActions = [''];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
  });
  middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = onComplete => {
  store = createStore(reducer, middlewares);
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store, null, onComplete);
  return { persistor, store };
};

export default configureStore;
