import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ytApp from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

const store = createStore(
  ytApp,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
