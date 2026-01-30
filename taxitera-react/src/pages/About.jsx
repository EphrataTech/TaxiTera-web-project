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

                    <div className="page-grid" style={{ marginBottom: '4rem' }}>
                        <div className="page-card">
                            <h2 className="page-card-title">Our Mission</h2>
                            <p className="page-card-text">
                                To provide safe, reliable, and affordable transportation solutions that connect communities and enhance the quality of life for residents of Addis Ababa.
                            </p>
                            <p className="page-card-text">
                                We believe that everyone deserves access to convenient transportation, regardless of their location or economic status.
                            </p>
                        </div>
                        <div className="page-card">
                            <h2 className="page-card-title">Our Vision</h2>
                            <p className="page-card-text">
                                To become the leading transportation platform in Ethiopia, setting the standard for safety, reliability, and customer satisfaction.
                            </p>
                            <p className="page-card-text">
                                We envision a future where getting around the city is seamless, sustainable, and accessible to all.
                            </p>
                        </div>
                    </div>

                    <div className="page-card" style={{ marginBottom: '4rem' }}>
                        <h2 className="page-card-title">Why Choose TaxiTera?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Verified Drivers</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>All drivers undergo comprehensive background checks and vehicle inspections for your safety and peace of mind.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Real-time Tracking</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>Track your ride in real-time with advanced GPS technology and share your trip details with family.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Transparent Pricing</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>Fair and transparent pricing with no hidden fees, surge pricing, or unexpected charges.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>24/7 Support</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>Round-the-clock customer service team ready to assist you with any questions or concerns.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Easy Booking</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>Intuitive and user-friendly interface makes booking your ride quick and effortless.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Fast Pickup</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>Quick response times with an average pickup time of 2-5 minutes in most areas.</p>
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
