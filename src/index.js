// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Redux
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './store/configure.js';

// Styles
import './index.css';
import './assets/main.css';
import 'semantic-ui-css/semantic.min.css';

// Misc
import * as serviceWorker from './serviceWorker';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
