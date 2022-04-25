import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promisMiddleware from 'redux-promise-middleware'

import rootReducers from './reducers'

const middleware = applyMiddleware(logger, promisMiddleware)
const store = createStore(rootReducers, middleware)

export default store