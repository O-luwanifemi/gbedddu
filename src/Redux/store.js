// FOR USE ONLY IN DEVELOPMENT
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import rootReducer from './Reducers/rootReducer.js';

// const middlewares = [ thunk, logger ];

// // This lets us use Redux dev tools in the browser
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

// export default store;


// FOR PRODUCTION
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './Reducers/rootReducer.js';

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;