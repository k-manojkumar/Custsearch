import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { ColumnSpan2 } from "./CommonElements";
import ProductDetails from "./ProductDetails";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapseAddress: false };
  }

  toggle() {
    this.setState({ collapseAddress: !this.state.collapseAddress });
  }

  render() {
    const addDisplay = {
      display: "none"
    };

    const addBold = {
      fontWeight: "bold"
    };

    var content = this.props.customer && (
      <div className="container-fluid m-5 p-5 bg-success">
        <div className="row  text-center">
          <h2>Customer Details</h2>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Firstname</h4>
          <h4 className="col-sm-3"> {this.props.customer.Firstname} </h4>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Surname</h4>
          <h4 className="col-sm-3"> {this.props.customer.Surname} </h4>
        </div>

        <div className="row " onClick={this.toggle}>
          <ColumnSpan2 />
          <h4
            className="col-sm-3"
            style={this.state.collapseAddress ? addBold : null}
          >
            Address
          </h4>
          <h4
            className="col-sm-3"
            style={this.state.collapseAddress ? addDisplay : null}
          >
            {this.props.customer.Postcode}
          </h4>
        </div>

        <Collapse isOpen={this.state.collapseAddress}>
          <Card>
            <CardBody>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 1</h4>
                <h4 className="col-sm-3">
                  {this.props.customer.address.Address1}
                </h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 2</h4>
                <h4 className="col-sm-3">
                  {this.props.customer.address.Address2}
                </h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 3</h4>
                <h4 className="col-sm-3">
                  {this.props.customer.address.Address3}
                </h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">City</h4>
                <h4 className="col-sm-3">{this.props.customer.address.City}</h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Country</h4>
                <h4 className="col-sm-3">
                  {this.props.customer.address.country}
                </h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Post Code</h4>
                <h4 className="col-sm-3">{this.props.customer.Postcode}</h4>
              </div>
            </CardBody>
          </Card>
        </Collapse>
        <ProductDetails products={this.props.customer.Products} />
      </div>
    );

    return <div>{content}</div>;
  }
}

export default CustomerDetails;
