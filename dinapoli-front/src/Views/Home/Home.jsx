import React from 'react';
import Cardy from '../../Components/Card/Card';
import Services from '../../Components/IconServices/IconServices';
import Menu from "../../Components/Menu/Menu";
import img from "../../assets/images/image-1.png"

const Home = () => {
    return (
        <main className="Home mt-3">
            <Cardy
                reverse="reverse" 
                title="Le Savoir-faire, un état d'esprit" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex." 
                img={img} 
            />
            <Services />
            <Menu />
        </main>
    )
}

export default Home;