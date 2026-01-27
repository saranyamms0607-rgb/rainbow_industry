import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Rainbow <span className="highlight">Industry</span></h2>
                        <p className="footer-brand-text">
                            Pioneering modular plastic solutions with high-fidelity IML technology since 2000.
                            Quality, durability, and innovation in every mold.
                        </p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#about">About Our Mission</a>
                            <a href="#teams">Our Professional Team</a>
                            <a href="#careers">Join the Innovation</a>
                            <a href="#contact">Contact Support</a>
                        </div>

                        <div className="footer-column">
                            <h4>Our Products</h4>
                            <a href="#products">IML container</a>
                            <a href="#products">food container</a>
                            <a href="#products">sanitary brush</a>
                        </div>

                        <div className="footer-column">
                            <h4>Connect With Us</h4>
                            <div className="footer-socials">
                                <a href="https://wa.me/#" className="social-icon whatsapp" target="_blank" rel="noreferrer">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://instagram.com/#" className="social-icon instagram" target="_blank" rel="noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://facebook.com/#" className="social-icon facebook" target="_blank" rel="noreferrer">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-info">
                        <p>&copy; {new Date().getFullYear()} Rainbow Industry. Future-Proof Plastic Manufacturing.</p>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
