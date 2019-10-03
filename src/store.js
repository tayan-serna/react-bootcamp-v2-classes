import { createStore, compose } from 'redux';

import reducer from './reducers';

/*
const {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware
} = Redux;

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeBoldRepeatAndLouder = compose(makeLouder, repeatThreeTimes, embolden);
console.log(makeBoldRepeatAndLouder('hello'));
"<B>HELLO</B><B>HELLO</B><B>HELLO</B>"

*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers());

export default store;
