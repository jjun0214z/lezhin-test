import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '@/store/reducers';

const configureStore = function () {
  const logger = createLogger();
  const middleware = [thunk, logger];

  const enhancer = compose(composeWithDevTools(applyMiddleware(...middleware)));
  const store = createStore(rootReducer, enhancer);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
