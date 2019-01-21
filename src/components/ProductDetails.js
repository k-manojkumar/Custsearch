import React, { Component } from "react";
import { ColumnSpan2 } from "./CommonElements";
import { Collapse, CardBody, Card } from "reactstrap";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      prodCount: Object.keys(this.props.products).length
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    const addDisplay = {
      display: "none"
    };

    const addBold = {
      fontWeight: "bold"
    };
    return (
      <div>
        <div className="row " onClick={this.toggle}>
          <ColumnSpan2 />
          <h4 className="col-sm-3" style={this.state.collapse ? addBold : null}>
            Products
          </h4>
          <h4
            className="col-sm-3"
            style={this.state.collapse ? addDisplay : null}
          >
            {this.state.prodCount}
          </h4>
        </div>

        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {this.props.products.map(product => (
                <div className="row" key={product.ProdNum}>
                  <ColumnSpan2 />
                  <h4 className="col-sm-3">{product.ProductName}</h4>
                  <h4 className="col-sm-3">{product.ProdNum}</h4>
                </div>
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ProductDetails;
