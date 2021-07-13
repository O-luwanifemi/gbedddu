import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getSongsAsync from '../Redux/Actions/getSongs.js';
import NavbarWithSearch from '../Components/Headers/NavbarWithSearch.js';
import Loader from '../Components/Loading';

const TopSongs = () => {
  const [ songs, setSongs ] = useState([]);
  const [ input, setInput ] = useState("");

  const dispatch = useDispatch();

  // Updates redux store with goodies from db
  useEffect(() => {
    dispatch(getSongsAsync());
  }, [dispatch])

  // Fetches goodies from redux store, to component
  const top_100_songs = useSelector(state => state.songsReducer);
  const { payload, isLoading, error } = top_100_songs;

  // Extracts valubales from the junks of data stored in the store
  useEffect(() => {
    const modifiedArr = [];

    payload.forEach(song => {
      modifiedArr.push({
        id: song.id.attributes["im:id"],
        song_title: song["im:name"].label,
        artiste: song["im:artist"].label,
        image: song["im:image"][0].label,
        play_song: song.link[0].attributes.href
      })
    })

    setSongs(modifiedArr);
  }, [payload]);

  // Handles the input field change
  const handleChange = event => {
    const input = event.target.value;
    setInput(input);
  }

  const filteredSongs = songs.filter(song => (
    song.song_title.toLowerCase().includes(input.toLowerCase())
  ))

  const title = filteredSongs.length ? "Top 100 Songs!" : "";

  return (
    <>
      <NavbarWithSearch placeholder="Search a song" onChange={handleChange}/>

      <main id="list_section">
        {isLoading ? <Loader /> : 
          error ? <h2>{error}</h2> :
          <section className="list-group">
            <h2 className="title">{title}</h2>

            <ul>
              {filteredSongs.map(song => {
                const { id, song_title, artiste, image, play_song } = song;
                return (
                  <li key={id} className="list-group-item">
                    <img src={image} alt={song_title} />
                    <section>
                      <div>
                        <h4>{song_title}</h4>
                        <p>BY: {artiste}</p>
                      </div>
                      
                      <a href={play_song}>
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

export default TopSongs;