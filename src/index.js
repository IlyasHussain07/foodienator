import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import foodStore from './redux/foodstore'

ReactDOM.render(
  <Provider store={foodStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
