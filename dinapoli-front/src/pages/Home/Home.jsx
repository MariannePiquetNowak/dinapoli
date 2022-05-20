import React from 'react';
import Card from '../../components/Card/Card';
import img from "../../assets/images/image-1.png"

const Home = () => {
    return (
        <main class="Home container mt-5 mb-5">
            <Card 
                reverse="no-reverse" 
                title="Le Savoir-faire, un état d'esprit" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex." 
                img={img} />
        </main>
    )
}

export default Home;