import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { ColumnSpan2 } from "./CommonElements";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const addDisplay = {
      display: "none"
    };
    return (
      <div className="container-fluid m-5 p-5 bg-success">
        <div className="row  text-center">
          <h2>Customer Details</h2>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Firstname</h4>
          <h4 className="col-sm-3"> Name </h4>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Firstname</h4>
          <h4 className="col-sm-3"> Name </h4>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Surname</h4>
          <h4 className="col-sm-3"> Name </h4>
        </div>
        <div className="row ">
          <ColumnSpan2 />
          <h4 className="col-sm-3">Date of Birth</h4>
          <h4 className="col-sm-3"> 01/01/1987 </h4>
        </div>
        <div className="row " onClick={this.toggle}>
          <ColumnSpan2 />
          <h4 className="col-sm-3">Address</h4>
          <h4
            className="col-sm-3"
            style={this.state.collapse ? addDisplay : null}
          >
            M22 9AN
          </h4>
        </div>

        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 1</h4>
                <h4 className="col-sm-3">asakjh</h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 1</h4>
                <h4 className="col-sm-3">asakjh</h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 2</h4>
                <h4 className="col-sm-3">asakjh</h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Line 3</h4>
                <h4 className="col-sm-3">asakjh</h4>
              </div>
              <div className="row">
                <ColumnSpan2 />
                <h4 className="col-sm-3">Post Code</h4>
                <h4 className="col-sm-3">M22 9AR</h4>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CustomerDetails;
