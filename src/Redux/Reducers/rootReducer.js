import { combineReducers } from "redux";

import songsReducer from './songsReducer';
import albumsReducer from './albumsReducer';

export default combineReducers({
  songsReducer,
  albumsReducer
})