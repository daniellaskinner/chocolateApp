import React from 'react';
import './searchbox.css';

class Searchbox extends React.Component {
    render() {
        return (
            <div class="searchBoxContainer">
                <form>
                    <input type="text" placeholder="Search the site"/>
                    <input type="submit" name="searchButton" value="Go!"/>
                </form>
            </div>
        )
    };
}

export default Searchbox;