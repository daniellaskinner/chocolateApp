import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navbar from './Components/Navbar/navbar';
import ChocolateCalc from './Components/ChocolateCalc/ChocolateCalc';
import ChocShop from './Components/ChocShop/ChocShop';

import * as serviceWorker from './serviceWorker';


//ROUTING TASK
import Homepage from './Components/Homepage/Homepage';
import Users from './Components/Users/Users';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

//grab the stuff out the package you need, alias browser router
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';


//routing component
class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/choc">Chocolate Calculator</Link>
                        </li>
                        <li>
                            <Link to="/chocshop">Choc Shop</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/*switch doing a switch conditional statement so if none of the URL found will use the one with no path specified*/}
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/choc" component={ChocolateCalc}/>
                        <Route path="/chocshop" component={ChocShop}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    };
}

ReactDOM.render(<Routing/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
