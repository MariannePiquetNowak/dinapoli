import React from 'react';
import Services from '../../Layouts/IconServices/IconServices';
import Menu from "../../Layouts/Menu/Menu";
import BlogAccess from "../../Layouts/BlogAccess/Blog";

const Home = () => {
    return (
        <main className="Home mt-3">
            <Services />
            <Menu />
            <BlogAccess />
        </main>
    )
}

export default Home;