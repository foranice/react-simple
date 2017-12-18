import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers/index';
import App from './containers/App.jsx';

let store;
store = createStore(
  reducers,
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <div style={{ height: '100%', width: '100%' }} >
        <Route exact path='/' component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
