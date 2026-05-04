/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Navigation bar component used to move between the four pages.
*/

import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ✨ From Big Dreams to Debugging
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/dream">
            My Dream
          </Link>

          <Link className="nav-link" to="/skills">
            Skills Lab
          </Link>

          <Link className="nav-link" to="/future">
            Future Plan
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;