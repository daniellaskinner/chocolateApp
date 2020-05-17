import React from 'react';
import Product from './Product/Product';
import Total from './Total/Total';
import './ChocShop.css';

class ChocShop extends React.Component{
  render() {
    return(
      <div className="chocProductContainer">
        <h2>This is the chocolate shop!</h2>
        <Product name="Crunchie" price="60"/>
        <Product name="MarsBar" price="65"/>
        <Product name="Kinder Bueno" price="90"/>
        <Total/>
      </div>
    );
  };
};

export default ChocShop;
