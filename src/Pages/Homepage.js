import { Link } from 'react-router-dom';

import Navbar from '../Components/Headers/Navbar.js';
import '../App.css';

const Homepage = () => {
  return (
    <>
      <Navbar />

      <section id="hero_section">
        <h1 className="text-center">
          What would you love <br /> to see today?
        </h1>

        <div className="buttons">
          <Link to="/top100songs" className="songs_btn">
            Top Songs
          </Link>

          <Link to="/top100albums" className="albums_btn">
            Top Albums
          </Link>
        </div>
      </section>
    </>
  )
}

export default Homepage;