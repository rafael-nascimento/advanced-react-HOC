import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
	<Root store={createStore(reducers, {})}>
		<BrowserRouter>
      <Route path="/" component={ App } />
		</BrowserRouter>
	</Root>, 
	document.querySelector('#root')
);