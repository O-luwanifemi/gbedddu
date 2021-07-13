import * as types from "../Types/types.js";

const getSongsSuccess = data => ({
  type: types.GET_TOP100SONGS_SUCCESS,
  data
})

const getSongsFail = error => ({
  type: types.GET_TOP100SONGS_FAIL,
  data: error
})

const startPageLoader = () => ({
  type: types.GET_SONGSREQUEST_LOADING
})

const getSongsAsync = () => async dispatch => {
  // Start loader
  dispatch(startPageLoader());

  try {
    const response = await fetch(`https://itunes.apple.com/us/rss/topsongs/limit=100/json`);
    const raw = await response.json();
    const payload = raw.feed.entry;

    dispatch(getSongsSuccess(payload));

  } catch (error) {
     dispatch(getSongsFail(error.message));
  }
}

export default getSongsAsync;