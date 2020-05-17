import React from 'react';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {qty: 0};
  };

  handleClick = () => {
    this.setState({qty: this.state.qty + 1});
  };

  show = () => {
    this.props.handleShow(this.props.name)
  };

  render() {
    return (
      <div className="chocProduct">
        <p>{this.props.name} - {this.props.price}p</p>
        <button onClick = {this.handleClick}>Buy</button>
        <button onClick = {this.show}>Show</button>
        <h3>Quantity: {this.state.qty} bar(s)</h3>
      </div>
    );
  };
};

export default Product;
