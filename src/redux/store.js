/* eslint-disable semi */
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

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = applyMiddleware(logger, promisMiddleware);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
