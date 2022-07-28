import React from 'react';
import Cardy from "../../Components/Card/Card";
import img from "../../assets/images/pate.png";

const BlogAccess = () => {
   
    return (
        <section className="blog-access">
            <Cardy
                reverse="reverse" 
                title="Un peu d'histoire sur la Pizza" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex." 
                img={img} 
                link={true}
                href="/blog"
                hrefText="Voir notre blog"
            />
        </section>
    )
}

export default BlogAccess;