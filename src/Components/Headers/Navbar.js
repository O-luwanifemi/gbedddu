const Navbar = () => {
  const brand_logo = "https://img.icons8.com/ios-glyphs/2x/listen-to-music.png";

  return (
    <header className="header">
      <div className="container">
        <div className="header__lhs">
          <a className="header__brand" href="/">
            <img
              src={brand_logo}
              alt="brand logo" width="45" height="45"
              className="d-inline-block align-text-center"
            />

            <h3>Gbedddu!</h3>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar;