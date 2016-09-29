import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/RootReducer.js';
import { createStore, applyMiddleware, compose } from 'redux';

const router = routerMiddleware(browserHistory);

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, router)
    )
  )
};
