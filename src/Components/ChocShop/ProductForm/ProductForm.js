import React from 'react';

class ProductForm extends React.Component{
  submit = (e) => {
    e.preventDefault();

    //use the ref attribute in the input to know where to get the value from
    let product = {
      name: this.refs.name.value,
      price: parseFloat(this.refs.price.value)
    }

    this.props.handleCreate(product);

    this.refs.name.value="";
    this.refs.price.value="";
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <br></br>
        <input type="text" placeholder="item" ref="name"/>
        <input type="text" placeholder="price" ref="price"/>
        <button>Create Product</button>
      </form>
    )
  };
};

export default ProductForm;
