import React,{ useState, useEffect } from 'react';

const item = 'services';

const URL = `http://localhost:8055/items/${item}`;
// Remplacer localhost par window.location

const IconServices = () => {

    const [services, setServices] = useState([]);
    const [icons, setIcon] = useState([]);

    useEffect(() => {
        fetch(`${URL}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
              })
        })
        .then(res => res.json())
        .then(datas => setServices(datas.data))
        .catch(error => {
            console.error('There was an error with services!', error);
        });
    }, []);


    return (
        <section className="Services my-5 py-4 py-md-5">
            {/* mapping */}
            {

                services.map(service => {
                    let file_id = service.icon;
                    const assets_url = `http://localhost:8055/assets/${file_id}`
                    return (

                        <div className="service" key={service.id}>
                            <div className="service__icon pyx-1 my-3">
                                <img src={assets_url} alt="dinapoli-icons" />
                                <div className="cut-circle"></div>
                            </div>
                            <div className="service__text">
                                <h5>{service.titre}</h5>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* mapping */}
        </section>
    )
        
}

export default IconServices;