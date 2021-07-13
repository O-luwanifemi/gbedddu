import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './Reducers/rootReducer.js';

const initialState = {};

const middlewares = [ thunk, logger ];
// This lets us use Redux dev tools in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

export default store;

// Should actually be: 
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// But you'd need to install compose module "npm i compose"