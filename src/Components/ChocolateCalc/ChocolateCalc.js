import React from 'react';
import './ChocolateCalc.css';

class ChocolateCalc extends React.Component {
    //setting up a constructor with props allows us access to all the things on react.component e.g. state
    constructor(props) {
        super(props);

        this.state = {
            chocValue: 0.80,
        };

        //calling the fetch function so stuff can be passed into state
        this.getBitcoinValue();
    }

    //this will make the fetch function happen every 5 seconds (as the bitcoin value changes) following the first render
    componentDidMount() {
        setInterval(
            () => this.getBitcoinValue(),
            5000);
    };

    //fetch function to get bitcoin value data from API
    getBitcoinValue(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(data=>data.json())
            .then((data)=>{
                let rate_float = parseFloat(data.bpi.GBP.rate_float).toFixed(2);
                this.setState({
                    bitcoinValue: parseFloat(rate_float),
                    numberOfChocs: this.calculateNumberOfChocs(rate_float)
                });
            });
    };

    //function to calculate how many choc bars this can buy when given a fixed choc price
    calculateNumberOfChocs(bitcoinValue){
        return (bitcoinValue/this.state.chocValue).toFixed();
    };

    render() {
        return (
            <div>
                <h1>1 bitcoin is worth {this.state.bitcoinValue}, that's {this.state.numberOfChocs} Twirl bars!</h1>
                <img className="choc-pic" src="http://images.sweetauthoring.com/product/80650.png" alt="chocBar"/>
            </div>
        )
    };
}

export default ChocolateCalc;