import React from 'react';

function FoodLine ({name, price, text}) {

    return ( 
        <div className="foodline col-sm-6">
            <div>
                <h3>{name}</h3>
                <div className="line"></div>
                <strong className="price">{
                    Number.isInteger(price) ? price + ".00" : price
                } €</strong>
            </div>
            <p>{text}</p>
        </div>
     );
}

export default FoodLine ;