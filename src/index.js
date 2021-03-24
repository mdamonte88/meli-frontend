import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
//import configureStore from './store/store';
import configureStore from './store/configureStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
