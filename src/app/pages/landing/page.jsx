import React from 'react';
import Hero from '../../components/hero';
import Content1 from '../../components/content1';
import Content2 from '../../components/content2';
import Footer from '../../components/footer';

const Landing = () => {
    return (
        <>
            <div className="p-5 lg:px-10 m-auto xl:px-40">
                <Hero />
                <Content1 />
            </div>
            <Content2 />
            <Footer />
        </>
    );
};

export default Landing;
