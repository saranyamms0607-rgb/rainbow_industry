import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <div className="image-card">
                        {/* Placeholder for now or CSS art */}
                        <div className="cube-art">
                            <div className="face front"></div>
                            <div className="face back"></div>
                            <div className="face right"></div>
                            <div className="face left"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">Who We Are</h2>
                    <h3 className="about-subtitle">Pioneering Plastic Innovation Since 2000</h3>
                    <p className="about-text">
                        Rainbow Industry is a leading manufacturer of high-quality plastic solutions.
                        We specialize in creating durable, safe, and aesthetic containers for food,
                        industrial use, and sanitary applications.
                    </p>
                    <p className="about-text">
                        Our commitment to sustainability and excellence ensures that every product
                        leaving our factory meets the highest global standards.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5M+</span>
                            <span className="stat-label">Products Sold</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
