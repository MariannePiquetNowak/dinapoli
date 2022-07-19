import React from 'react';
import FoodLine from '../../Components/FoodLine/FoodLine';


const Dessert = ({desserts}) => {

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