import * as types from "../Types/types.js";

const getAlbumsSuccess = data => ({
  type: types.GET_TOP100ALBUMS_SUCCESS,
  data
})

const getAlbumsFail = error => ({
  type: types.GET_TOP100ALBUMS_FAIL,
  data: error
})

const startPageLoader = () => ({
  type: types.GET_ALBUMSREQUEST_LOADING
})

const getAlbumsAsync = () => async dispatch => {
  // Start loader
  dispatch(startPageLoader());

  try {
    const response = await fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`);
    const raw = await response.json();
    const payload = raw.feed.entry;

    if(payload.length) {
      return dispatch(getAlbumsSuccess(payload));
    }

    dispatch(getAlbumsFail("A server error occurred!"))
  } catch (error) {
    dispatch(getAlbumsFail(error.message))
  }
}
 
export default getAlbumsAsync;