import React, { useState, useEffect } from 'react'; 
import Card from '../../Components/Card/Card';
import img from '../../assets/images/image-1.png';

const Team = () => {

    const [members, setMember] = useState();

    useEffect(() => {

    }, []);

    return (
        <main className="Team mt-3">
            {/* <Card
                reverse="reverse" 
                title="Un peu d'histoire sur la Pizza" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex." 
                img={img} 
                link={true}
                href="/blog"
                hrefText="Voir notre blog"
            /> */}
        </main>
    )
}

export default Team;