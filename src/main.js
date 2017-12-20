import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers/index'
import Demo from './pages/demo.jsx'

let store
store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware),
)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <div style={{ height: '100%', width: '100%' }} >
        <Route exact path='/' component={Demo} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
)
