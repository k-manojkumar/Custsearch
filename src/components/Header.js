import React, { Component } from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import Logo from "../lbg_logo.png";

class Header extends Component {
  state = {};

  render() {
    var mystyle = {
      backgroundColor: "#006a4d"
    };
    return (
      <div style={mystyle} className="app-header container-fluid">
        <img src={Logo} className="img-responsive Logo-Margin" alt="logo" />
      </div>
    );
  }
}

export default Header;
