import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo-container" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} alt="Rainbow Industry Logo" className="navbar-logo-img" />
                </a>
                <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={() => scrollToSection('hero')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={() => scrollToSection('about')}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#teams" className="nav-links" onClick={() => scrollToSection('teams')}>Teams</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#products" className="nav-links dropbtn" onClick={(e) => e.preventDefault()}>
                            Products <i className="arrow down"></i>
                        </a>
                        <div className="dropdown-content">
                            <a href="#products" onClick={() => scrollToSection('products')}>IML Container</a>
                            <a href="#products" onClick={() => scrollToSection('products')}>Food Container</a>
                            <a href="#products" onClick={() => scrollToSection('products')}>Sanitary Brush</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-btn" onClick={() => scrollToSection('contact')}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
