import React from 'react';
import Cardy from '../../components/Card/Card';
import Services from '../../components/IconServices/IconServices';
import Pizza from "../../components/Menu/Pizza";
import img from "../../assets/images/image-1.png"

const Home = () => {
    return (
        <main className="Home container mt-3">
            <Cardy
                reverse="reverse" 
                title="Le Savoir-faire, un état d'esprit" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex." 
                img={img} 
            />
            <Services />
            <Pizza />
        </main>
    )
}

export default Home;