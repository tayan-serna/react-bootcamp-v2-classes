import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
