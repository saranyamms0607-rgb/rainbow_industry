import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (product) {
            document.title = `${product.name} | Rainbow Industry Products`;
        }
        window.scrollTo(0, 0);

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
    }, [id]);

    if (!product) {
        return <div className="not-found">Product not found. <Link to="/">Go Home</Link></div>;
    }

    return (
        <>
            <Navbar />
            <div className="product-details-page">
                <div className="details-container">
                    <div className="back-link">
                        <Link to="/">&larr; Back to Home</Link>
                    </div>
                    <div className="details-grid">
                        <div className="details-image-wrapper reveal-left">
                            <div className="details-bg-circle"></div>
                            <img src={product.image} alt={product.name} className="details-image" />
                        </div>

                        <div className="details-info reveal-right">
                            <span className="details-category">{product.category}</span>
                            <h1 className="details-title">{product.name}</h1>
                            <p className="details-long-desc">{product.longDescription}</p>

                            <div className="features-list">
                                <h3>Key Features</h3>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="inquire-btn">Inquire Now</button>

                        </div>
                    </div>
                    {product.variants && (
                        <div className="product-variants-section reveal-on-scroll">
                            <h2 className="variants-heading">Our Products List</h2>
                            <div className="variants-grid">
                                {product.variants.map((variant) => (
                                    <div key={variant.id} className="variant-card">
                                        <div className="variant-image-wrapper">
                                            <img src={variant.image} alt={variant.name} />
                                        </div>
                                        <div className="variant-info">
                                            <p className="variant-name">{variant.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
