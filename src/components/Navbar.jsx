import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Worko
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/candidate/home">
              Home
            </Link>
          </li>
        </ul>
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
