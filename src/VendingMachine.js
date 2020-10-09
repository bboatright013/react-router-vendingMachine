import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';

const VendingMachine = () => {

    return (
        <div className="VendingMachine">
            <ul>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/soda">Soda</Link></li>
                <li><Link to="/candy">Candy</Link></li>
            </ul>

        </div>
    )
}

export default VendingMachine;