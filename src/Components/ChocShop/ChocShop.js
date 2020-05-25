import React from 'react';
import Product from './Product/Product';
import Total from './Total/Total';
import './ChocShop.css';

class ChocShop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      products: [
        {name: "Crunchie", price: 0.6, imageUrl: "crunchie.png"},
        {name: "MarsBar", price: 0.65, imageUrl: "marsbar.jpeg"},
        {name: "Kinder Bueno", price: 0.93, imageUrl: "kinderbueno.jpeg"},
        {name: "Cadbury dairy milk", price: 0.75, imageUrl: "dairymilk.png"}
      ]
    };
  };

  calculateTotal = (price) => {
    this.setState({total: this.state.total + price});
  };

  showProduct = (name) => {
    alert("You selected " + name)
  };

  render() {
    //loop through all the chocbar products that are stored in local chocshop state
    let chocBars = this.state.products.map((product) => {
      return(
        <Product
        name={product.name}
        price={product.price}
        image={product.imageUrl}
        handleShow={this.showProduct}
        handleTotal={this.calculateTotal}
        />
      );
    });

    return(
      <div className="chocProductContainer">
        <h2>This is the chocolate shop!</h2>
        {chocBars}
        <Total total={this.state.total}/>
      </div>
    );
  };
};

export default ChocShop;
