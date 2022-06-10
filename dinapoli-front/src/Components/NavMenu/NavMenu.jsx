import React, { useState } from 'react';

const NavMenu = ({setType}) => {

    const [isActive, setIsActive] = useState("active");

    const toggleClass = (e) => {
        let classes = '';
        let els = document.getElementsByClassName('active');
        if(els){
            while (els[0]) {
                els[0].classList.remove('active')
            }
        }
        e.target.className = classes.replace('','active');
    }
    
    return (
        <>
            <nav className={`navbar-menu mb-5`}>
                <ul>
                    <li className={`menu-items`}><button className="active" onClick={(e) => {
                        toggleClass(e)
                        setType('pizza')
                        }}>Les Pizzas</button></li>
                    <li className={`menu-items`}><button className="" onClick={(e) => {
                        toggleClass(e)
                        setType('panuozzo')
                    }}>Les Panuozzos</button></li>
                    <li className={`menu-items`}><button className="" onClick={(e) => {
                        toggleClass(e)
                        setType('dessert')
                    }}>Les Desserts</button></li>
                </ul>
            </nav>
        </>
    )
}

export default NavMenu;