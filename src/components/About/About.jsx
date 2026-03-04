import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../../assets/logo.jpg';
import './About.css';
import R3DViewer from '../R3DViewer/R3DViewer';

const About = () => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Logo Animation
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, scale: 0.5, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: 1,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-scroll-section" ref={containerRef}>
            {/* Background Blobs for Visual Interest */}
            <div className="about-bg-elements">
                <div className="blob blur-1"></div>
                <div className="blob blur-2"></div>
            </div>

            <div className="about-container">
                {/* LEFT - R3D CANVAS */}
                <div className="canvas-wrapper">
                    <R3DViewer />
                    <div className="logo-overlay-box" ref={logoRef}>
                        <img src={logo} alt="Rainbow Logo" className="about-logo-inner" />
                    </div>
                </div>

                {/* RIGHT - CONTENT */}
                <div className="about-content">
                    <h2 className="section-title">Who We Are</h2>
                    <h3 className="about-subtitle">Pioneering Plastic Innovation Since 2000</h3>

                    <div className="about-description">
                        <p className="about-text">
                            Rainbow Industry is a leading manufacturer of high-quality plastic solutions.
                            We specialize in creating durable, safe, and aesthetic containers for food,
                            industrial use, and sanitary applications.
                        </p>
                        <p className="about-text">
                            Our commitment to sustainability and excellence ensures that every product
                            leaving our factory meets the highest global standards.
                        </p>
                    </div>

                    <div className="about-stats-grid">
                        <div className="stat-item">
                            <h3 className="stat-number">20+</h3>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-number">5M+</h3>
                            <span className="stat-label">Products Sold</span>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-number">100%</h3>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

