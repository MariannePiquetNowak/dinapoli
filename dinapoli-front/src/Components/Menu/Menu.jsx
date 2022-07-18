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
    const [panuozzos, setPanuozzo] = useState([]);
    const [desserts, setDessert] = useState([]);
    const [pizzas, setPizza] = useState([]);
    const status = "true"
    const published = "published"

    // Pizza hedbo
    useEffect(() => {
        fetch(getItemsFilter("hebdo_items", `[active]=${status}`))
        .then(res => res.json())
        .then(datas => setSpecial(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération de la pizza hebdo`, err))
    }, [])


    // Pizzas 
    useEffect(() => {
        fetch(getItemsFilter("menu_items", `[categorie]=pizza&filter[status]=${published}`))
        .then(res => res.json())
        .then(datas =>setPizza(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des pizzas`, err))

    }, [])

    // Panuozzo
    useEffect(() => {
        fetch(getItemsFilter("menu_items", `[categorie]=panuozzo&filter[status]=${published}`))
        .then(res => res.json())
        .then(datas => setPanuozzo(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des panuozzos`, err))
    }, [pizzas])

    // Dessert
    useEffect(() => {
        fetch(getItemsFilter("menu_items", `[categorie]=dessert&filter[status]=${published}`))
        .then(res => res.json())
        .then(datas => setDessert(datas.data))
        .catch(err => console.error(`Erreur lors de la récupération des desserts`, err))
    }, [panuozzos])


    const renderSwitch = (param) => {
        switch(param) {
            case 'panuozzo': 
                return <Panuozzos panuozzos={panuozzos} />
            case 'dessert':
                return <Dessert desserts={desserts} />
            default: 
                return <Pizza pizzas={pizzas}/>;
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
                special.map(item => {
                    let file_id = item.image;
                    const assets_url = `http://localhost:8055/assets/${file_id}`;
                    return (
                        <Special 
                            key={item.id} 
                            categorie={item.categorie} 
                            name={item.name}
                            price={item.price}
                            text={item.texte}
                            img={assets_url}
                            />
                    )
                    
                })
            }
        </section>
    )
}

export default Menu;

const Special = ({categorie, name, price, text, img}) => {
    return (
        <div className="special">
            <h1 className="pt-5">La spécialité de la semaine</h1>
            <Card className={`pb-md-5 pb-lg-5 my-5 mx-3 mx-md-3 mx-lg-5`}>
                <Card.Img src={img} />
                    <FoodLine name={name} price={price} text={text}  />
            </Card>
            <div className="bg"></div>
        </div>
    )
}