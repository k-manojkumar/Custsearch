import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColleagueLogin from "./ColleagueLogin";
import CustomerSearch from "./CustomerSearch";
import CustomerDetails from "./CustomerDetails";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null,
      searchFlag: false
    };
    this.findCustomerNamePostcode = this.findCustomerNamePostcode.bind(this);
    this.findCustomerProdNumber = this.findCustomerProdNumber.bind(this);
    this.clearDown = this.clearDown.bind(this);
  }

  findCustomerProdNumber(pNumber) {
    console.log(pNumber);
    this.clearDown();
    fetch("http://localhost:3001/Productsearch?ProductNum=" + pNumber, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data[0]) {
          this.setState({ searchFlag: true, customer: data[0] });
        }
      });
  }

  findCustomerNamePostcode(name, postCode) {
    console.log(name);
    console.log(postCode);
    this.clearDown();
    let queryString = "Surname=" + name + "&PostCode=" + postCode;
    fetch("http://localhost:3001/customersearch?" + queryString, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json", accept: "json" }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data[0]) {
          this.setState({ searchFlag: true, customer: data[0] });
        }
      });
  }

  clearDown() {
    console.log("clear down triggered");
    this.setState({
      searchFlag: false,
      customer: null
    });
  }

  render() {
    var handleRedirect = this.state.searchFlag && <Redirect to="/Details" />;
    return (
      <Switch>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <ColleagueLogin
                handleLogin={this.props.handleLogin}
                login={this.props.login}
              />
            )}
          />
          <Route
            path="/Search"
            component={() => (
              <CustomerSearch
                findCustomerNamePostcode={this.findCustomerNamePostcode}
                findCustomerProdNumber={this.findCustomerProdNumber}
                clearDown={this.clearDown}
                match={this.props.match}
              />
            )}
          />
          <Route
            path="/Details"
            component={() => <CustomerDetails customer={this.state.customer} />}
          />
          {handleRedirect}
        </div>
      </Switch>
    );
  }
}

export default Content;
