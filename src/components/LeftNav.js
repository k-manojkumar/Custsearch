import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftNav extends Component {
  state = {};
  render() {
    return (
      <div className="container text-left no-padding-container col-sm-12">
        <ul className="nav flex-column bg-light">
          <li className="nav-item">
            <Link className="nav-link" to="/Intranet">
              Intranet
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
