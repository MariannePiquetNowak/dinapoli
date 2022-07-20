import React from 'react';
import Services from '../../Layouts/IconServices/IconServices';
import Menu from "../../Layouts/Menu/Menu";
import BlogAccess from "../../Layouts/BlogAccess/Blog";
import Sectioninfo from "../../Layouts/SectionInfo/SectionInfo";
const Home = () => {
    return (
        <main className="Home mt-3">
            <Services />
            <Menu />
            <BlogAccess />
            <Sectioninfo />
        </main>
    )
}

export default Home;