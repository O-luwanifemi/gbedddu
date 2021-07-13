import * as types from "../Types/types.js";
import initialState from './reducerInitialState/initialState';


const albumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_ALBUMSREQUEST_LOADING:
      return {
        ...state, 
        payload: [],
        isLoading: true
      }
    case types.GET_TOP100ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.data
      }
    case types.GET_TOP100ALBUMS_FAIL:
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

export default albumsReducer;