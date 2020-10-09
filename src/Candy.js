import React from 'react';
import {Link} from 'react-router-dom';



const Candy = () => {

    return (
        <div className="Candy">
            <p>Candy</p>
            <p><Link to="/">Vending Machine</Link></p>
        </div>
    )

}

export default Candy;