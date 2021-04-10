import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducer/main_reducer'

let store = createStore(reducers,applyMiddleware(promiseMiddleware))

export default store;