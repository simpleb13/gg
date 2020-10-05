import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

import App from './components/App';
import booksReducer from './reducers/booksReducer';

const store = createStore(booksReducer, Map(), compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
