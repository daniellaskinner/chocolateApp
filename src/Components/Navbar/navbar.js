import React from 'react';
import './navbar.css';
import Searchbox from "./Searchbox/searchbox";

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <nav>
                <p>Yo welcome to Nelly's React app!</p>
                <Searchbox/>
            </nav>
            <img class="react-image" src="https://blog.zingchart.com/content/images/2016/06/react-1.png" alt="reactLogo"/>
            </div>
    )
    };
}

export default Navbar;
