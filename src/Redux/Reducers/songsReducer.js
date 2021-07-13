import * as types from "../Types/types.js";
import initialState from './reducerInitialState/initialState';

const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SONGSREQUEST_LOADING:
      return {
        ...state, 
        payload: [],
        isLoading: true
      }
    case types.GET_TOP100SONGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.data
      }
    case types.GET_TOP100SONGS_FAIL:
      return {
        ...state,
        payload: [],
        isLoading: false,
        error: action.data
      }
    default:
      return state;
  }
}

export default songsReducer;