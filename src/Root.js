import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middleware/async';
import stateValidator from 'middleware/stateValidator';

const Root = props => {
  const store = createStore(reducers, props.initialState || {}, applyMiddleware(async, stateValidator))

  return (
    <Provider store={store}>
      { props.children }
    </Provider>
  );
};

export default Root;