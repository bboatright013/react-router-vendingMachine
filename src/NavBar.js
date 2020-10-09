import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavBar">
                <div><NavLink exact to="/">Vending Machine</NavLink></div>
                <div><NavLink exact to="/chips">Chips</NavLink></div>
                <div><NavLink exact to="/soda">Soda</NavLink></div>
                <div><NavLink exact to="/candy">Candy</NavLink></div>
        </div>
    )

}

export default NavBar;