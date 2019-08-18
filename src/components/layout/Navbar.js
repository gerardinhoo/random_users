import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Find Random Users",
    icon: "fas fa-user"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className="navbar bg-success">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
