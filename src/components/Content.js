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

  findCustomerProdNumber(pNumber) {}

  findCustomerNamePostcode(name, postCode) {}

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
          <Route path="/Search" component={CustomerSearch} />
          <Route path="/Details" component={CustomerDetails} />
        </div>
      </Switch>
    );
  }
}

export default Content;
