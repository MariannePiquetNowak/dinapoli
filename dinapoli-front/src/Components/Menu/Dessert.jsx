import React, { useState, useEffect } from 'react';
import FoodLine from '../FoodLine/FoodLine'
import { getItemsFilter } from '../../services/constants';

const Dessert = () => {

    const [desserts, setDessert] = useState([])
    const status = "published"

    useEffect(() => {
        fetch(getItemsFilter("menu_items", `[categorie]=dessert&filter[status]=${status}`))
        .then(res => res.json())
        .then(datas => setDessert(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des desserts`, err))
    }, [])

    return (
        <>
             {
                desserts.map(dessert => (
                    <FoodLine 
                        key={dessert.id.toString()}
                        name={dessert.name} 
                        price={dessert.price} 
                        text={dessert.description} 
                    />
                ))
            }
        </>
    )
}

export default Dessert;