import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProdSearch from "./ProdSearch.js";
import NameSearch from "./NameSearch.js";

class CustomerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <Link className="nav-link " to={"/Search/prodsearch"}>
              <b className="text-success">Product Number Search</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Search/namesearch"}>
              <b className="text-success">Surname and Postcode Search</b>
            </Link>
          </li>
        </ul>
        <div className="row">
          <Switch>
            <Route
              path={"/Search/prodsearch"}
              component={() => (
                <ProdSearch
                  findCustomerProdNumber={this.props.findCustomerProdNumber}
                />
              )}
            />
            <Route
              path={"/Search/namesearch"}
              component={() => (
                <NameSearch
                  findCustomerNamePostcode={this.props.findCustomerNamePostcode}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default CustomerSearch;
