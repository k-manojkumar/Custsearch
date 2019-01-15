import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ColleagueLogin from "./ColleagueLogin";
import CustomerSearch from "./CustomerSearch";
import CustomerDetails from "./CustomerDetails";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        firstName: "",
        surName: "",
        dob: "",
        address: {
          line1: "",
          line2: "",
          line3: "",
          line4: "",
          postCode: ""
        },
        products: [""]
      }
    };
    this.findCustomerNamePostcode = this.findCustomerNamePostcode.bind(this);
    this.findCustomerProdNumber = this.findCustomerProdNumber.bind(this);
  }

  findCustomerProdNumber(pNumber) {
    console.log(pNumber);

    fetch("http://localhost:3001/Productsearch?ProductNum=" + pNumber, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  findCustomerNamePostcode(name, postCode) {
    console.log(name);
    console.log(postCode);
    let queryString = "Surname=" + name + "&PostCode=" + postCode;
    fetch("http://localhost:3001/customersearch?" + queryString, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json", accept: "json" }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
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
                match={this.props.match}
              />
            )}
          />
          <Route path="/Details" component={CustomerDetails} />
        </div>
      </Switch>
    );
  }
}

export default Content;
