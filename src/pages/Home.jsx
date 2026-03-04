import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Doodles from '../components/Doodles/Doodles';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

// Lazy-load About (contains Three.js 3D viewer — ~1MB)
// Only loads when user scrolls near it
const About = lazy(() => import('../components/About/About'));

const Home = () => {
    useEffect(() => {
        document.title = "Rainbow Industry | Premium Plastic Solutions & IML Packaging";
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
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
            <Doodles />
            <div id="about" className="reveal-on-scroll">
                {/* Suspense boundary — About + 3D model loads independently */}
                <Suspense fallback={
                    <div style={{
                        height: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fff',
                        color: '#aaa',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>
                        Loading…
                    </div>
                }>
                    <About />
                </Suspense>
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
