import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ColumnSpan2 } from "./CommonElements.js";

class CustomerSearch extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul class="nav nav-pills nav-justified">
          <li className="nav-item">
            <Link
              className="nav-link "
              to={this.props.match.path + "/prodsearch"}
            >
              <b className="text-success">Product Number Search</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={this.props.match.path + "/namesearch"}
            >
              <b className="text-success">Surname and Postcode Search</b>
            </Link>
          </li>
        </ul>
        <div className="row">
          <Switch>
            <Route
              path={this.props.match.path + "/prodsearch"}
              component={ProdSearch}
            />
            <Route
              path={this.props.match.path + "/namesearch"}
              component={NameSearch}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

function NameSearch() {
  return (
    <div className="container-fluid m-5 p-5 bg-success">
      <div className="row top-buffer" />
      <div className="row top-buffer">
        <ColumnSpan2 />
        <h4 className="col-sm-3">Firstname</h4>
        <input type="text" className="col-sm-3" />
      </div>
      <div className="row top-buffer">
        <div className="col-sm-2" />
        <h4 className="col-sm-3">Surname</h4>
        <input type="text" className="col-sm-3" />
      </div>
      <div className="row top-buffer">
        <div className="col-sm-2" />
        <h4 className="col-sm-3">Postcode</h4>
        <input type="text" className="col-sm-3" />
      </div>
      <div className="row top-buffer">
        <div className="col-sm-5" />
        <button>Search</button>
      </div>
    </div>
  );
}

function ProdSearch() {
  return (
    <div className="container-fluid m-20 p-20 bg-success">
      <div className="row top-buffer" />

      <div className="row top-buffer">
        <div className="col-sm-2" />
        <h4 className="col-sm-3">Product Number</h4>
        <input type="text" className="col-sm-3" />
      </div>
      <div className="row top-buffer">
        <div className="col-sm-5" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default CustomerSearch;
