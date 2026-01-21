import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { productsData } from '../../data/products';

const Products = () => {
    return (
        <section className="products-section">
            <div className="products-container">
                <h2 className="products-title">Our Premium Products</h2>
                <p className="products-subtitle">Explore our wide range of plastic solutions</p>

                <div className="products-grid">
                    {productsData.map((product) => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image-container">
                                <div className="img-wrapper">
                                    <img src={product.image} alt={product.name} className="product-img-animated" />
                                </div>
                                <div className="product-overlay">
                                    <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
