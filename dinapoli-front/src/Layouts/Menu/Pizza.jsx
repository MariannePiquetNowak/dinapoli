import React from 'react';
import FoodLine from '../../Components/FoodLine/FoodLine';

function Pizza({pizzas}) {

    return ( 
        <>
        {
            pizzas.map(pizza => (
                <FoodLine 
                    key={pizza.id.toString()}
                    name={pizza.name} 
                    price={pizza.price} 
                    text={pizza.description} 
                />
            ))
        }
        </>
     );
}

export default Pizza;