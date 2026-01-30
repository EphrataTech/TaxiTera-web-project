import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="page">
            <div className="page-bg">
                <img src="/addisababa.png" alt="Addis Ababa" />
                <div className="page-overlay"></div>
            </div>
            <div className="page-content">
                <div className="page-container">
                    <div className="page-header">
                        <h1 className="page-title">
                            About <span className="gradient">TaxiTera</span>
                        </h1>
                        <p className="page-description">
                            We're revolutionizing urban transportation in Addis Ababa with reliable, affordable, and transparent ride-sharing services.
                        </p>
                    </div>

                    <div className="page-grid" style={{ marginBottom: '4rem' }}>
                        <div className="page-card">
                            <h2 className="page-card-title">Our Story</h2>
                            <p className="page-card-text">
                                Founded in 2020, TaxiTera emerged from a simple vision: to make transportation in Addis Ababa more accessible, reliable, and affordable for everyone.
                            </p>
                            <p className="page-card-text">
                                Today, we connect thousands of riders with professional drivers every day, facilitating safe and comfortable journeys across the beautiful city of Addis Ababa.
                            </p>
                        </div>
                        <div className="page-card">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#FBBF24', marginBottom: '0.5rem' }}>50K+</div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Active Riders</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#FBBF24', marginBottom: '0.5rem' }}>4.8★</div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Average Rating</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#FBBF24', marginBottom: '0.5rem' }}>24/7</div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Support</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#FBBF24', marginBottom: '0.5rem' }}>100%</div>
                                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Verified Drivers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-card" style={{ marginBottom: '4rem' }}>
                        <h2 className="page-card-title">Why Choose TaxiTera?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Verified Drivers</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>All drivers undergo background checks</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Real-time Tracking</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Track your ride with GPS technology</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Transparent Pricing</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>No hidden fees or surge pricing</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎧</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>24/7 Support</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Round-the-clock customer service</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Easy Booking</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Simple app interface for quick bookings</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Fast Pickup</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Average pickup time of 2-5 minutes</p>
                            </div>
                        </div>
                    </div>

                    <div className="page-cta">
                        <Link to="/register" className="btn-hero-primary">
                            Join TaxiTera Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
