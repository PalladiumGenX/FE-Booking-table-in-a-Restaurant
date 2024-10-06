import { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="container">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/menu">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
      </div>
    </>
  );
};

export default Nav;