import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promisMiddleware from 'redux-promise-middleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const middleware = applyMiddleware(logger, promisMiddleware);
const store = createStore(rootReducers, middleware);

export default store;
