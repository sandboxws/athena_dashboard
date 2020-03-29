import reducers from './reducers';
import { Iterable } from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      }
      else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});

const middleware = [logger];

export default (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
};
