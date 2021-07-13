import { combineReducers } from "redux";

import songsReducer from './songsReducer.js';
import albumsReducer from './albumsReducer.js';

export default combineReducers({
  songsReducer,
  albumsReducer
})