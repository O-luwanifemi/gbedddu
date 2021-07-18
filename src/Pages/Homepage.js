import { Link } from 'react-router-dom';

import Navbar from '../Components/Headers/Navbar.js';
import '../App.css';

const Homepage = () => {
  const songsCardImg = "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";

  const albumsCardImg = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";

  return (
    <>
      <Navbar />

      <section id="hero_section">
        <h1 className="text-center">What would you love to see today?</h1>

        <section className="cards">
          <Link to="/top100songs" className="carrrrd hvr-bob">
            <img src={songsCardImg} alt="top songs card" />

            <div className="card-body">
              <p>Top 100 songs</p>
            </div>
          </Link>

          <Link to="/top100albums" className="carrrrd hvr-bob">
            <img src={albumsCardImg} alt="top albums card" />

            <div className="card-body">
              <p>Top 100 albums</p>
            </div>
          </Link>
        </section>
      </section>
    </>
  )
}

export default Homepage;