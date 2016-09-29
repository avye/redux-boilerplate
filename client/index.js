import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import Root from './containers/RootContainer.js';
import Store from './store/configureStore.js';

// import CSS file
var store = Store();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
