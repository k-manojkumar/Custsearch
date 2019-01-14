import React, { Component } from "react";

class ColleagueLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pwd: "",
      login: false
    };
    this.updateId = this.updateId.bind(this);
    this.updatePwd = this.updatePwd.bind(this);
  }

  updateId(e) {
    this.setState({
      id: e.target.value
    });
  }

  updatePwd(e) {
    this.setState({
      pwd: e.target.value
    });
  }

  render() {
    console.log(this.props.login);
    console.log(this.props.handleLogin);
    var userMsg = this.props.login && (
      <div className="col-sm-5 text-center top-buffer">
        <h2 className="text-success font-weight-bold">Login Success!!</h2>
        <br />
      </div>
    );
    var userData = !this.props.login && (
      <div>
        <div className="row top-buffer">
          <span className="col-sm-2 right-buffer">Colleague ID: </span>
          <input
            className="col-sm-3"
            type="text"
            value={this.state.id}
            onChange={this.updateId}
          />
        </div>
        <div className="row top-buffer">
          <span className="col-sm-2 right-buffer">Password: </span>
          <input
            className="col-sm-3"
            type="password"
            value={this.state.pwd}
            onChange={this.updatePwd}
          />
        </div>
        <div className="row top-buffer">
          <span className="col-sm-2  right-buffer" />
          <button
            onClick={() =>
              this.props.handleLogin(this.state.id, this.state.pwd)
            }
          >
            Login
          </button>
        </div>
      </div>
    );

    console.log(userMsg);
    return (
      <div className="text-success">
        <div className="row top-buffer">
          <div className="col-sm-2" />
          <h2>Colleague Login</h2>
        </div>
        {userData}
        {userMsg}
      </div>
    );
  }
}

export default ColleagueLogin;
