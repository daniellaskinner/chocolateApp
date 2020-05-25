import React from 'react';

class Total extends React.Component{
  render() {
    return(
      <div>
        <h3>Total to pay: £{this.props.total.toFixed(2)}</h3>
      </div>
    );
  };
};

export default Total;
