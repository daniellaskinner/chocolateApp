import React from 'react';
import Product from './Product/Product';
import Total from './Total/Total';
import './ChocShop.css';

class ChocShop extends React.Component{

  showProduct = (name) => {
    alert("You selected " + name)
  };

  render() {
    return(
      <div className="chocProductContainer">
        <h2>This is the chocolate shop!</h2>
        <Product name="Crunchie" price="60" handleShow={this.showProduct}/>
        <Product name="MarsBar" price="65" handleShow={this.showProduct}/>
        <Product name="Kinder Bueno" price="90" handleShow={this.showProduct}/>
        <Total/>
      </div>
    );
  };
};

export default ChocShop;
