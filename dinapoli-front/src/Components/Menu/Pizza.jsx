import React from 'react';
import FoodLine from '../FoodLine/FoodLine'
import { getItemsFilter } from '../../services/constants';

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