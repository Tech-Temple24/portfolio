import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

function NavBar({ isAuthenticated }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My Website
        </Link>
        <ul id="navbar-nav">
          {!isAuthenticated && (
            <>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
