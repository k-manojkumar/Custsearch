import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-inverse no-margin">
        <div className="navbar-header">
          <b className="navbar-brand">Counter</b>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link disabled={this.props.login} to="/">
                Home
              </Link>
            </li>
            <li className={this.props.login ? "nav-item" : "nav-item disabled"}>
              <Link to="/Search/prodsearch">Search</Link>
            </li>
            <li className={this.props.login ? "nav-item" : "nav-item disabled"}>
              <Link to="/Details">Details</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
