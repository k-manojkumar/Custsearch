import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    var disableClick = {
      pointerEvents: "none"
    };

    var logout = this.props.login && (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/" onClick={this.props.logout}>
            <span className="glyphicon glyphicon-user" /> Logout
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-inverse no-margin">
        <div className="navbar-header">
          <b className="navbar-brand">Counter</b>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                this.props.login
                  ? "nav-item"
                  : "nav-item disabled disable-pointer"
              }
            >
              <Link to="/Search/prodsearch">Search</Link>
            </li>
            <li
              className={
                this.props.login
                  ? "nav-item"
                  : "nav-item disabled disable-pointer"
              }
            >
              <Link to="/Details">Details</Link>
            </li>
          </ul>
          {logout}
        </div>
      </nav>
    );
  }
}

export default NavBar;
