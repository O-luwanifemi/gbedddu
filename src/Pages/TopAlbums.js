import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../App.css';
import getAlbumsAsync from '../Redux/Actions/getAlbums';
import NavbarWithSearch from '../Components/Headers/NavbarWithSearch';
import Loader from '../Components/Loading';

const TopAlbums = () => {
  const [ albums, setAlbums ] = useState([]);
  const [ input, setInput ] = useState("");

  const dispatch = useDispatch();

  // Updates redux store with goodies from db
  useEffect(() => {
    dispatch(getAlbumsAsync());
  }, [dispatch]);

  // Fetches goodies from redux store, to component
  const albumsData = useSelector(state => state.albumsReducer || []);
  const { payload, isLoading, error } = albumsData;

  // Extracts valubales from the junks of data stored in the store
  useEffect(() => {
    const modifiedArr = payload.map(album => ({
      id: album.id.attributes["im:id"],
      album_title: album["im:name"].label,
      artiste: album["im:artist"].label,
      image: album["im:image"][0].label,
      album_songs_link: album.link.attributes.href
    }))
    
    setAlbums(modifiedArr);
  }, [payload])

  // Handles the input field change
  const handleChange = event => {
    const input = event.target.value;
    setInput(input);
  }

  const filteredAlbums = albums.filter(album => (
    album.album_title.toLowerCase().includes(input.toLowerCase())
  ));

  const title = filteredAlbums.length ? "Top 100 Albums!" : "";

  return (
    <>
      <NavbarWithSearch placeholder="Search an album" onChange={(e) => handleChange(e)} />

      <main id="list_section">
        {isLoading ? <Loader /> : 
          error ? <h2 className="fetchError_text">{error}</h2> :
          <section className="list-group">
            <h2 className="title">{title}</h2>

            <ul>
              {filteredAlbums.map(album => {
                const { id, album_title, artiste, image, album_songs_link } = album;
                
                return (
                  <li key={id} className="list-group-item">
                    <img src={image} alt={album_title} />
                    
                    <section>
                      <div>
                        <h4>{album_title}</h4>
                        <p>BY: {artiste}</p>
                      </div>
                      
                      <a href={album_songs_link}>
                        <i className="fas fa-play-circle icon"></i>
                      </a>
                    </section>
                  </li>
                )
              })}
            </ul>
          </section>
        }
      </main>
    </>
  )
}

export default TopAlbums;