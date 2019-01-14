import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar_old extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      customer: {
        sname: "",
        fname: "",
        dob: "",
        address: { line1: "", line2: "", line3: "", line4: "" }
      },
      product: ""
    };
    this.updateLogin = this.updateLogin.bind;
  }

  updateLogin() {
    this.setState({
      login: true
    });
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Counter</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Search">Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/Details">Details</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar_old;
