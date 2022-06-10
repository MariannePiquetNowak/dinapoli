import React, { useState } from 'react';

const NavMenu = ({setType}) => {

    return (
        <>
            <nav className="navbar-menu mb-5">
                <ul>
                    <li className="menu-items"><button onClick={() => setType('pizza')}>Les Pizzas</button></li>
                    <li className="menu-items"><button onClick={() => setType('panuozzo')}>Les Panuozzos</button></li>
                    <li className="menu-items"><button onClick={() => setType('dessert')}>Les Desserts</button></li>
                </ul>
            </nav>
        </>
    )
}

export default NavMenu;