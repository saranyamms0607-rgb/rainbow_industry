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
        window.scrollTo(0, 0);
        // Force trigger entrance animations
        const timer = setTimeout(() => {
            document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => el.classList.add('active'));
        }, 100);
        return () => clearTimeout(timer);
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

                            <div className="specs-box">
                                <h3>Specifications</h3>
                                <div className="specs-grid">
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-key">{key}:</span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="inquire-btn">Inquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
