import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Pizzas from './Pizza';

const Menu = () => {
    return (
        <section className="menu">
            <NavMenu />
            <Pizzas />
        </section>
    )
}

export default Menu;