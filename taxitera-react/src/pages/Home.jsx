import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/addisababa.png" alt="Addis Ababa city skyline" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Available in Addis Ababa</span>
                    </div>
                    <h1>
                        Your Ride,
                        <span className="gradient">Your Way</span>
                    </h1>
                    <p>
                        Book reliable, affordable rides across Addis Ababa. Fast pickup, trusted drivers, and transparent pricing.
                    </p>
                    <div className="hero-features">
                        <div className="hero-features-item">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FBBF24' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>2-5 min pickup</span>
                        </div>
                        <div className="hero-features-divider"></div>
                        <div className="hero-features-item">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FBBF24' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>All neighborhoods</span>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <a href="#book" className="btn-hero-primary">
                            Book Now
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                        <Link to="/about" className="btn-hero-secondary">Learn More</Link>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stats-item">
                            <div className="hero-stats-value">50K+</div>
                            <div>Active Riders</div>
                        </div>
                        <div className="hero-stats-divider"></div>
                        <div className="hero-stats-item">
                            <div className="hero-stats-value">4.8★</div>
                            <div>Average Rating</div>
                        </div>
                        <div className="hero-stats-divider"></div>
                        <div className="hero-stats-item">
                            <div className="hero-stats-value">24/7</div>
                            <div>Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            About <span className="gradient">TaxiTera</span>
                        </h2>
                        <p className="section-description">
                            We're revolutionizing urban transportation in Addis Ababa with reliable, affordable, and transparent ride-sharing services.
                        </p>
                    </div>
                    <div className="about-grid">
                        <div>
                            <img src="/addis-ababa-taxi.png" alt="TaxiTera service" className="about-image" />
                        </div>
                        <div className="about-content">
                            <p className="about-text">
                                Founded in 2020, TaxiTera has grown to become Addis Ababa's most trusted ride-sharing platform. We connect thousands of riders with professional drivers every day.
                            </p>
                            <p className="about-text">
                                Our mission is simple: make transportation accessible, safe, and affordable for everyone in Addis Ababa.
                            </p>
                            <div className="about-features">
                                <div className="about-feature">
                                    <svg className="about-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>Professional, verified drivers</span>
                                </div>
                                <div className="about-feature">
                                    <svg className="about-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>Real-time GPS tracking</span>
                                </div>
                                <div className="about-feature">
                                    <svg className="about-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>Transparent pricing</span>
                                </div>
                                <div className="about-feature">
                                    <svg className="about-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>24/7 customer support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="section how-it-works">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            How It <span className="gradient">Works</span>
                        </h2>
                        <p className="section-description">
                            Booking your taxi is quick and easy. Follow these simple steps to get your digital ticket.
                        </p>
                    </div>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-icon-wrapper">
                                <div className="step-icon-glow"></div>
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="step-title">Create Account</h3>
                            <p className="step-description">Sign up with your email and phone number to get started with TaxiTera.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-icon-wrapper">
                                <div className="step-icon-glow"></div>
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="step-title">Select Route</h3>
                            <p className="step-description">Choose your pickup and destination from popular Addis Ababa locations.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="step-icon-wrapper">
                                <div className="step-icon-glow"></div>
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="step-title">Book Seats</h3>
                            <p className="step-description">Select your preferred taxi type and number of seats for your journey.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <div className="step-icon-wrapper">
                                <div className="step-icon-glow"></div>
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="step-title">Get QR Ticket</h3>
                            <p className="step-description">Complete payment and receive your digital QR code ticket instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section services">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Our <span className="gradient">Services</span>
                        </h2>
                        <p className="section-description">
                            Experience premium ride-sharing with features designed for your comfort and convenience.
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <h3 className="service-title">Quick Pickup</h3>
                            <p className="service-description">Average pickup time of 2-5 minutes. We're always nearby when you need us.</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            <h3 className="service-title">Safe & Secure</h3>
                            <p className="service-description">All drivers are verified and insured. Your safety is our top priority.</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="service-title">Transparent Pricing</h3>
                            <p className="service-description">No hidden charges. Know your fare before you book.</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="service-title">24/7 Availability</h3>
                            <p className="service-description">Available round the clock. We're here whenever you need a ride.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section pricing">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Simple <span className="gradient">Pricing</span>
                        </h2>
                        <p className="section-description">
                            Choose the plan that works best for you. No hidden fees, no surprises.
                        </p>
                    </div>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <h3 className="pricing-name">Economy</h3>
                            <p className="pricing-description">Perfect for daily commutes</p>
                            <div className="pricing-price">Affordable</div>
                            <button className="pricing-btn">Get Started</button>
                            <div className="pricing-features">
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Standard vehicles</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Real-time tracking</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Basic support</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Ride history</span>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card highlighted">
                            <h3 className="pricing-name">Premium</h3>
                            <p className="pricing-description">For a more comfortable experience</p>
                            <div className="pricing-price">Premium</div>
                            <button className="pricing-btn">Get Started</button>
                            <div className="pricing-features">
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Premium vehicles</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Priority pickup</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>24/7 support</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Ride history</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Loyalty rewards</span>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <h3 className="pricing-name">Business</h3>
                            <p className="pricing-description">For corporate needs</p>
                            <div className="pricing-price">Custom</div>
                            <button className="pricing-btn">Get Started</button>
                            <div className="pricing-features">
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Dedicated account</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Bulk booking</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Monthly invoicing</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Priority support</span>
                                </div>
                                <div className="pricing-feature">
                                    <svg className="pricing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Custom pricing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section faq">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Frequently Asked <span className="gradient">Questions</span>
                        </h2>
                        <p className="section-description">Find answers to common questions about TaxiTera.</p>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item">
                            <input type="checkbox" id="faq-1" className="faq-toggle" />
                            <label htmlFor="faq-1" className="faq-question">
                                <span className="faq-question-text">How do I book a ride?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    Download the TaxiTera app, create an account, enter your pickup and destination, and confirm your booking. A driver will be matched to you within minutes.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <input type="checkbox" id="faq-2" className="faq-toggle" />
                            <label htmlFor="faq-2" className="faq-question">
                                <span className="faq-question-text">Are the drivers verified?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    Yes, all our drivers undergo thorough background checks and verification. Your safety is our top priority.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <input type="checkbox" id="faq-3" className="faq-toggle" />
                            <label htmlFor="faq-3" className="faq-question">
                                <span className="faq-question-text">What payment methods do you accept?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    We accept cash, mobile money (Telebirr, M-Birr), and card payments through our app.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <input type="checkbox" id="faq-4" className="faq-toggle" />
                            <label htmlFor="faq-4" className="faq-question">
                                <span className="faq-question-text">Can I schedule a ride in advance?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    Yes, you can schedule rides up to 7 days in advance through the app.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <input type="checkbox" id="faq-5" className="faq-toggle" />
                            <label htmlFor="faq-5" className="faq-question">
                                <span className="faq-question-text">What if I have an issue with my ride?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    Our 24/7 customer support team is always available to help. Contact us through the app or call our support line.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <input type="checkbox" id="faq-6" className="faq-toggle" />
                            <label htmlFor="faq-6" className="faq-question">
                                <span className="faq-question-text">Do you offer corporate accounts?</span>
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div className="faq-answer">
                                <p className="faq-answer-text">
                                    Yes, we offer customized corporate packages with dedicated support and bulk booking options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
