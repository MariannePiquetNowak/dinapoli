import React, { useState } from 'react';
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
        <section className="menu">
            <NavMenu reference={type} setType={setType} />
            {renderSwitch(type)}
        </section>
    )
}

export default Menu;