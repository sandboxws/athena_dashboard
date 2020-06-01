// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// Redux
// import { Provider as StoreProvider } from "react-redux";
// import configureStore from './store/configure';

// Apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Styles
import "./assets/main.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

// Misc
import * as serviceWorker from "./serviceWorker";

import { onError } from "apollo-link-error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: "http://localhost:3030/graphql",
});

const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const initialState = {};
// const store = configureStore(initialState);

ReactDOM.render(
  // <StoreProvider store={store}>
  //   <ApolloProvider client={client}>
  //     <App />
  //   </ApolloProvider>
  // </StoreProvider>,
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
