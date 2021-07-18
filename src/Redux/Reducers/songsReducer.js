import * as types from "../Types/types.js";

const initialState = {
  error: "",
  payload: [],
  isLoading: false
}

const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SONGSREQUEST_LOADING:
      return {
        ...state,
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
        isLoading: false,
        error: action.data
      }
    default:
      return state;
  }
}

export default songsReducer;