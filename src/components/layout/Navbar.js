import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <img
          src="https://www.sccpre.cat/mypng/detail/2-21859_cartoon-group-of-people-png-png-download-college.png"
          alt=""
          style={{ width: "70px", marginRight: "40px" }}
        />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Random Users",
  icon: "fas fa-user"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
