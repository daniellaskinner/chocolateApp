import React from 'react';
import Product from './Product/Product';
import Total from './Total/Total';

class ChocShop extends React.Component{
  render() {
    return(
      <div>
        <Product/>
        <Product/>
        <Product/>
        <Total/>
      </div>
    );
  };
};

export default ChocShop;
