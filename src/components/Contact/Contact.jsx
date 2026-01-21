import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h2 className="section-title">Get In Touch</h2>
                    <h3 className="contact-heading">Ready to start your project?</h3>
                    <p className="contact-text">
                        Whether you need custom IML containers or bulk wholesale orders,
                        our team is here to help you find the perfect plastic solution.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <div className="detail-text">
                                <h4>Location</h4>
                                <p>123 Industrial Park, Plastic City, PC 56789</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📧</span>
                            <div className="detail-text">
                                <h4>Email</h4>
                                <p>info@rainbowindustry.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <div className="detail-text">
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Tell us about your needs" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
