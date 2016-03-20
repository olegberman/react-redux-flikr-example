import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

// const store = createStore(
//   rootReducer,
//   {},
//   applyMiddleware(thunk)
// )

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

render(
  <Provider store={finalCreateStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
