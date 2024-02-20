import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../NavBar/icons";
import SoundBar from "../../subComponents/SoundBar";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>

      <nav className="navbar">
          {/* <SoundBar/> */}
        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo">

            <span>PramithaMJ</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Skills
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/Achievments"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Achievments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Certificates"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                Certificates
                </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               My Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;