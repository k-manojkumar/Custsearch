import React, { Component } from "react";

import Header from "./components/Header";
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
    // http://localhost:3001/logon?user=test&password=1234
    let queryString = "user=" + id + "&password=" + pwd;
    fetch("http://localhost:3001/logon?" + queryString, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json", accept: "json" }
    })
      .then(response => response.json())
      .then(data => this.setState({ login: data }));
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
