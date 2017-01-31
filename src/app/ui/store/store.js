import { createStore, applyMiddleware } from 'redux';
import routerMiddleware from 'preact-router-redux/lib/middleware';

import browserHistory from '../../lib/browserHistory';
import rootReducer from '../reducers/root';

const router = routerMiddleware(browserHistory);

let middleware = [router];
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const createLogger = require('redux-logger');
  const logger       = createLogger();
  middleware         = [...middleware, logger];
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const enhancer = (
  (process.env.NODE_ENV !== 'production' || undefined)
  && window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancer);
}
