import React,{ useState, useEffect } from 'react';

// Icons 
import Truck from '../../assets/images/truck-icon.svg';

const URL = "http://localhost:8055/items/services"
// Remplacer localhost par window.location

const IconServices = ({icon, title, text}) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`${URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())

    }, []);


    return (
        <section className="Services my-5 py-2 py-md-5">
            <div className="service">
                <div className="service__icon py-1 my-3">
                    <img src={Truck} alt="dinapoli-icons" />
                    <div className="cut-circle"></div>
                </div>
                <div className="service__text">
                    <h5>Service 1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
            </div>
            <div className="service">
                <div className="service__icon py-2 my-3">
                    <img src={Truck} alt="dinapoli-icons" />
                    <div className="cut-circle"></div>
                </div>
                <div className="service__text">
                    <h5>Service 1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
            </div>
            <div className="service">
                <div className="service__icon py-2 my-3">
                    <img src={Truck} alt="dinapoli-icons" />
                    <div className="cut-circle"></div>
                </div>
                <div className="service__text">
                    <h5>Service 1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
            </div>
            <div className="service">
                <div className="service__icon py-2 my-3">
                    <img src={Truck} alt="dinapoli-icons" />
                    <div className="cut-circle"></div>
                </div>
                <div className="service__text">
                    <h5>Service 1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
            </div>
        </section>
    )
        
}

export default IconServices;