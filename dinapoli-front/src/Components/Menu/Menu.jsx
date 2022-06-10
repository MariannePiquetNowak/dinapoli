import React, { useState, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Pizza from './Pizza';
import Panuozzos from './Panuozzo';
import Dessert from './Dessert';

const Menu = () => {

    const [type, setType] = useState('pizza') // by default

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
            <div class="parallax-menu"></div>
            <NavMenu reference={type} setType={setType} />
            <div className="row px-md-3 px-lg-5">
                {renderSwitch(type)}
            </div>
        </section>
    )
}

export default Menu;