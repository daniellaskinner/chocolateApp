import React from 'react';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {qty: 0};
  };

  buy = () => {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price);
  };

  show = () => {
    this.props.handleShow(this.props.name)
  };

  render() {
    return (
      <div className="chocProduct">
        <p>{this.props.name} - £{this.props.price}</p>
        <img src={this.props.image} className="chocImage"/>
        <button onClick = {this.buy}>Buy</button>
        <button onClick = {this.show}>Show</button>
        <h3>Quantity: {this.state.qty} bar(s)</h3>
      </div>
    );
  };
};

export default Product;
