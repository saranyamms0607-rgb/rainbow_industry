import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-content reveal-left">
                    <h2 className="section-title">Get In Touch</h2>
                    <h3 className="contact-heading">Ready to start your project?</h3>
                    <p className="contact-text">
                        Whether you need custom IML containers or bulk wholesale orders,
                        our team is here to help you find the perfect plastic solution.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item stagger-1">
                            <div className="contact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.336C20 6.04 16.418 2 12 2S4 6.04 4 10.988c0 3.64 1.556 6.333 3.5 8.336a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.357.784zM12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <h4>Location</h4>
                                <p>95/1, Bannimantap Rd, Shivarathreeshwara Nagar,<br />Industrial Area, Mysuru, Karnataka 570016</p>
                            </div>
                        </div>
                        <div className="contact-item stagger-2">
                            <div className="contact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <h4>Email</h4>
                                <p>info@rainbowindustry.com</p>
                            </div>
                        </div>
                        <div className="contact-item stagger-3">
                            <div className="contact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <h4>Phone</h4>
                                <p>+91 87628 46625</p>
                            </div>
                        </div>
                    </div>

                    {/* Map embed */}
                    <div className="contact-map">
                        <iframe
                            title="Rainbow Industry Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0!2d76.6155!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE3JzQ0LjkiTiA3NsKwMzYnNTUuOCJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <div className="contact-form-wrapper reveal-right">
                    {submitted && (
                        <div className="success-toast">
                            <span>✅</span> Message sent successfully! We'll be in touch shortly.
                        </div>
                    )}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell us about your needs"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
