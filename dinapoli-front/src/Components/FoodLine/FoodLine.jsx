import React from 'react';

function FoodLine ({name, price, text}) {

    return ( 
        <div className="food">
            <div>
                <h3>{name}</h3>
                <div className="line"></div>
                <strong className="price">{price} €</strong>
            </div>
            <p>{text}</p>
        </div>
     );
}

export default FoodLine ;