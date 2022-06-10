import React, { useState, useEffect } from 'react';
import FoodLine from '../FoodLine/FoodLine'
import { getItemsFilter } from '../../services/constants';

function Panuozzo() {

    const [panuozzos, setPanuozzo] = useState([])
    const status = "published"

    useEffect(() => {
        fetch(getItemsFilter("menu_items", `[categorie]=panuozzo&filter[status]=${status}`))
        .then(res => res.json())
        .then(datas => setPanuozzo(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des panuozzos`, err))
    }, [])

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