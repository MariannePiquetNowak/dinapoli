import React from 'react';

const NavMenu = () => {
    return (
        <>
            <nav className="navbar-menu mb-3">
                <ul>
                    <li className="menu-items"><a href="#Pizzas">Les Pizzas</a></li>
                    <li className="menu-items"><a href="#Panuozzos">Les Panuozzos</a></li>
                    <li className="menu-items"><a href="#Desserts">Les Desserts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavMenu;