import React from 'react';
import FoodLine from '../FoodLine/FoodLine'

function Panuozzo({panuozzos}) {

    return ( 
        <>
            {
                panuozzos.map(panuozzo => (
                    <FoodLine 
                        key={panuozzo.id.toString()}
                        name={panuozzo.name} 
                        price={panuozzo.price} 
                        text={panuozzo.description} 
                    />
                ))
            }
        </>
     );
}

export default Panuozzo;