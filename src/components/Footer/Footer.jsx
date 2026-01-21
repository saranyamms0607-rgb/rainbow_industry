import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Rainbow Industry</h2>
                        <p>Creating a sustainable future with premium plastic solutions.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#about">About Us</a>
                            <a href="#teams">Teams</a>
                            <a href="#careers">Careers</a>
                        </div>
                        <div className="footer-column">
                            <h4>Products</h4>
                            <a href="#products">IML Containers</a>
                            <a href="#products">Food Storage</a>
                            <a href="#products">Sanitary</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rainbow Industry. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
