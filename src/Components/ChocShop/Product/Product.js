import React from 'react';
// import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {qty: 0};
  };

  handleClick = () => {
    this.setState({qty: this.state.qty + 1});
  };

  render() {
    return (
      <div>
        <h2>This is the chocolate shop!</h2>
        <p>Crunchie - 60p</p>
        <button onClick = {this.handleClick}>Buy</button>
        <h3>Quantity: {this.state.qty} bar(s)</h3>
      </div>
    );
  };
};

export default Product;
