import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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
                            Our <span className="gradient">Services</span>
                        </h1>
                        <p className="page-description">
                            Choose from our range of transportation options designed to meet your needs and budget in Addis Ababa.
                        </p>
                    </div>

                    <div className="page-grid" style={{ marginBottom: '4rem' }}>
                        {/* Minibus Service */}
                        <div className="page-card">
                            <div className="page-card-icon"></div>
                            <h3 className="page-card-title">Minibus</h3>
                            <p className="page-card-text">Perfect for small groups and families. Comfortable seating for up to 12 passengers with professional service.</p>
                            <ul className="page-card-list">
                                <li>12 passenger capacity</li>
                                <li>Air conditioning</li>
                                <li>Professional driver</li>
                                <li>Standard pricing</li>
                            </ul>
                            <div className="page-card-price">
                                <div className="page-card-price-value">$15-45</div>
                                <div className="page-card-price-label">per person</div>
                            </div>
                        </div>

                        {/* Higer Service */}
                        <div className="page-card" style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                                <span style={{ background: 'linear-gradient(to right, #FBBF24, #F97316)', color: 'black', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>POPULAR</span>
                            </div>
                            <div className="page-card-icon"></div>
                            <h3 className="page-card-title">Higer</h3>
                            <p className="page-card-text">Economy option for larger groups. Spacious and comfortable for longer journeys with great value.</p>
                            <ul className="page-card-list">
                                <li>45 passenger capacity</li>
                                <li>Climate control</li>
                                <li>Experienced driver</li>
                                <li style={{ color: '#4ADE80', fontWeight: 500 }}>20% cheaper per person</li>
                            </ul>
                            <div className="page-card-price">
                                <div className="page-card-price-value" style={{ color: '#4ADE80' }}>$12-36</div>
                                <div className="page-card-price-label">per person</div>
                            </div>
                        </div>

                        {/* Bus Service */}
                        <div className="page-card">
                            <div className="page-card-icon"></div>
                            <h3 className="page-card-title">Bus</h3>
                            <p className="page-card-text">Budget-friendly option for large groups. Most economical way to travel together across the city.</p>
                            <ul className="page-card-list">
                                <li>50 passenger capacity</li>
                                <li>Basic amenities</li>
                                <li>Licensed driver</li>
                                <li style={{ color: '#60A5FA', fontWeight: 500 }}>30% cheaper per person</li>
                            </ul>
                            <div className="page-card-price">
                                <div className="page-card-price-value" style={{ color: '#60A5FA' }}>$10-32</div>
                                <div className="page-card-price-label">per person</div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div className="page-card" style={{ marginBottom: '4rem' }}>
                        <h2 className="page-card-title">Additional Services</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Advance Booking</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>Schedule your rides up to 7 days in advance. Perfect for airport transfers, important meetings, or planned events with guaranteed availability.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Corporate Packages</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>Special rates for businesses and organizations. Bulk booking discounts, dedicated account management, and priority support available.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Custom Routes</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>Need a specific route not in our system? Contact us for custom routing, special destination requests, and personalized travel solutions.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Premium Support</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>24/7 customer support with priority assistance for urgent travel needs, emergency situations, and real-time trip monitoring.</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Info */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '1.5rem' }}>Transparent Pricing</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                                <div style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>No Hidden Fees</div>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>What you see is what you pay - transparent pricing always</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                                <div style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>No Surge Pricing</div>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Same fair rates throughout the day and night</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                                <div style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>Group Discounts</div>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Better per-person rates for larger vehicle bookings</p>
                            </div>
                        </div>
                    </div>

                    <div className="page-cta">
                        <Link to="/register" className="btn-hero-primary">
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
