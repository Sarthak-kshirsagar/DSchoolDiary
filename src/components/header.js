import React, { useState, useRef  } from "react";

import "./style.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu's open state
  };



  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src="/sdicon.png" alt="DSchoolDiary" />
          </div>
          <button className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why DSchoolDiary</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            {/* Uncomment this block if dropdown functionality is needed in the future */}
            {/* <li className="dropdown">
              <a href="#" className="dropdown-link">More</a>
              <ul className="dropdown-menu">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;



