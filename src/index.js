// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Redux
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './store/configure.js';

// Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Styles
import './assets/main.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// Misc
import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'http://localhost:3030/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <StoreProvider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
