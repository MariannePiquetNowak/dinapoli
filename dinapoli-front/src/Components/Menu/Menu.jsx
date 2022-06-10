import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import NavMenu from '../NavMenu/NavMenu';
import Pizza from './Pizza';
import Panuozzos from './Panuozzo';
import Dessert from './Dessert';
import FoodLine from '../FoodLine/FoodLine';

import { getItemsFilter } from '../../services/constants';

const Menu = () => {

    const [type, setType] = useState('pizza') // by default
    const [special, setSpecial] = useState([]);
    const status = "true"

    useEffect(() => {
        fetch(getItemsFilter("hebdo_items", `[active]=${status}`))
        .then(res => res.json())
        .then(datas => setSpecial(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération de la pizza hebdo`, err))
    }, [])

    console.log(special)

    const renderSwitch = (param) => {
        switch(param) {
            case 'panuozzo': 
                return <Panuozzos />
            case 'dessert':
                return <Dessert />;
            default: 
                return <Pizza />;
        }
    }

    return (
        <section className="py-2 py-md-3 menu">
            <div className="parallax-menu"></div>
                <NavMenu reference={type} setType={setType} />
            <div className="row px-md-3 px-lg-5">
                {renderSwitch(type)}
            </div>
            {
                special.map(item => (
                    <Special 
                        key={item.id} 
                        categorie={item.categorie} 
                        name={item.name}
                        price={item.price}
                        text={item.texte}
                        />
                ))
            }
        </section>
    )
}

export default Menu;

const Special = ({categorie, name, price, text}) => {
    return (
        <div className="special">
            <Card className={`pb-md-5 pb-lg-5 my-5 mx-3 mx-md-3 mx-lg-5`}>
                <Card.Img variant="top" src="" />
                
                    <FoodLine name={name} price={price} text={text}  />
                
            </Card>
        </div>
    )
}