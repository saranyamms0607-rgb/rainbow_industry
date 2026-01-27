import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Teams from '../components/Teams/Teams';
import Products from '../components/Products/Products';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once animated, we don't need to observe it anymore
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const animatedElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-wrapper">
            <Navbar />
            <Hero />
            <div id="about" className="reveal-on-scroll">
                <About />
            </div>
            <div id="teams" className="reveal-on-scroll">
                <Teams />
            </div>
            <div id="products" className="reveal-on-scroll">
                <Products />
            </div>
            <div id="contact" className="reveal-on-scroll">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
