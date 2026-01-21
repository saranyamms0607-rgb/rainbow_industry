import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Teams from '../components/Teams/Teams';
import Products from '../components/Products/Products';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div id="about">
                <About />
            </div>
            <div id="teams">
                <Teams />
            </div>
            <div id="products">
                <Products />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Home;
