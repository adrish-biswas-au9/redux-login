import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './store/storefile';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>, document.getElementById('root')
);


