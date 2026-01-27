import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero_background.png';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-background" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
            }}>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Shaping the Future <br />
                    <span className="highlight">of Plastic Solutions</span>
                </h1>
                <p className="hero-subtitle">
                    Premium IML Containers, Food Storage, and Sanitary Solutions.
                    <br />Designed for durability, crafted for excellence.
                </p>
                <div className="hero-btns">
                    <a href="#products" className="btn btn-primary">Explore Products</a>
                    <a href="#contact" className="btn btn-secondary">Get a Quote</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
