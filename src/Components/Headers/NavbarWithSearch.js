import React, { useState } from 'react';

const NavbarWithSearch = ({ placeholder, onChange }) => {
  const [ isToggled, setIsToggled ] = useState(false);

  const toggleHandler = () => {
    setIsToggled(() => !isToggled);
  }

  const brand_logo = "https://img.icons8.com/ios-glyphs/2x/listen-to-music.png";

  return (
    <header className="header">
      <div className="container">
        <div className="header__lhs">
          <a href="/" className="header__brand">
            <img
              src={brand_logo}
              alt="brand logo" width="45" height="45"
              className="d-inline-block align-text-center"
            />

            <h3>Gbedddu!</h3>
          </a>
        </div>

        <div className="menu__container">
          <i className="fas fa-bars" onClick={toggleHandler}></i>
        </div>

        <div className={`header__rhs ${isToggled ? "show" : null}`}>
          <i className="fas fa-search"></i>

          <input
            className="form-control searchField"
            type="search"
            placeholder={placeholder}
            aria-label="Search"
            onChange={onChange}
          />
        </div>
      </div>
    </header>
  )
}

export default NavbarWithSearch;