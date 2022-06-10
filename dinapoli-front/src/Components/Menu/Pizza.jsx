import React, { useState, useEffect } from 'react';
import FoodLine from '../FoodLine/FoodLine'
import { getItemsFilter } from '../../services/constants';

function Pizza() {

    const [pizzas, setPizza] = useState([])

    useEffect(() => {
        fetch(getItemsFilter("menu_items", "[categorie]=pizza"))
        .then(res => res.json())
        .then(datas => setPizza(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des pizzas`, err))
    }, [])

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