import React, { Component } from "react";

class ProdSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productNumber: ""
    };
    this.updateProductNumber = this.updateProductNumber.bind(this);
  }

  updateProductNumber(e) {
    this.setState({
      productNumber: e.target.value
    });
  }
  render() {
    return (
      <div className="container-fluid m-20 p-20 bg-success">
        <div className="row top-buffer" />

        <div className="row top-buffer">
          <div className="col-sm-2" />
          <h4 className="col-sm-3">Product Number</h4>
          <input
            type="text"
            className="col-sm-3"
            value={this.state.productNumber}
            onChange={this.updateProductNumber}
          />
        </div>
        <div className="row top-buffer">
          <div className="col-sm-5" />
          <button
            onClick={() =>
              this.props.findCustomerProdNumber(this.state.productNumber)
            }
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default ProdSearch;
