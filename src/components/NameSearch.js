import React, { Component } from "react";
import { ColumnSpan2 } from "./CommonElements";

class NameSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: "",
      postcode: "",
      productNumber: ""
    };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updatePostcode = this.updatePostcode.bind(this);

    this.updateSurname = this.updateSurname.bind(this);
  }

  updateFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  updateSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }

  updatePostcode(e) {
    this.setState({
      postcode: e.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid m-5 p-5 bg-success">
        <div className="row top-buffer" />
        <div className="row top-buffer">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Firstname</h4>
          <input
            type="text"
            className="col-sm-3"
            value={this.state.firstname}
            onChange={this.updateFirstName}
          />
        </div>
        <div className="row top-buffer">
          <div className="col-sm-2" />
          <h4 className="col-sm-3">Surname</h4>
          <input
            type="text"
            className="col-sm-3"
            value={this.state.surname}
            onChange={this.updateSurname}
          />
        </div>
        <div className="row top-buffer">
          <div className="col-sm-2" />
          <h4 className="col-sm-3">Postcode</h4>
          <input
            type="text"
            className="col-sm-3"
            value={this.state.postcode}
            onChange={this.updatePostcode}
          />
        </div>
        <div className="row top-buffer">
          <div className="col-sm-5" />
          <button
            onClick={() =>
              this.props.findCustomerNamePostcode(
                this.state.surname,
                this.state.postcode
              )
            }
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default NameSearch;
