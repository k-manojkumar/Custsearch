import React, { Component } from "react";

import "jquery/src/jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import NavBar from "./components/NavBar";
import Content from "./components/Content.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
    this.updateLogin = this.updateLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  updateLogin() {
    this.setState({
      login: true
    });
  }

  handleLogin(id, pwd) {
    if (id === "12345" && pwd === "qwerty") {
      this.setState({ login: true });

      console.log("state login set as true");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <NavBar login={this.state.login} />
        <div className="row content">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <Content handleLogin={this.handleLogin} login={this.state.login} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
