// IMPORT LIBRARIES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT STYLES
import "../styles/navbar.css";

// IMPORT ICONS
// import MenuIcon from "../assets/icons/menu";
// import CancelIcon from "../assets/icons/cancel";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Aakriti Kedia
          </NavLink>

          <ul class="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
              >
                About me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="resume"
                className="nav-links"
              >
                Resume
              </NavLink>

              {/* <a href="resume.pdf" className="nav-links">
                Resume
              </a> */}
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
              >
                Contact
              </NavLink>
            </li> */}
          </ul>

        </div>
      </nav>
    </ div>
  );
}

export default Navbar;