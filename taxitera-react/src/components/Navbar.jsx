import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                            </svg>
                        </div>
                        <span className="logo-text">
                            <span className="gradient">Taxi</span><span className="white">Tera</span>
                        </span>
                    </Link>
                    <nav className="desktop-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard">Dashboard</Link>
                                <span style={{ color: 'var(--amber-400)', fontSize: '0.9rem' }}>Hi, {user.fullName}</span>
                                <button onClick={handleLogout} className="btn-primary">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Sign In</Link>
                                <Link to="/register" className="btn-primary">Get Started</Link>
                            </>
                        )}
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden', opacity: isMobileMenuOpen ? 1 : 0 }}>
                <div className="mobile-menu-backdrop" onClick={toggleMobileMenu}></div>
                <div className="mobile-menu" style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                    <div className="mobile-menu-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div className="logo-icon">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="logo-text">
                                <span className="gradient">Taxi</span><span className="white">Tera</span>
                            </span>
                        </div>
                        <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="mobile-menu-nav">
                        <Link to="/" onClick={toggleMobileMenu}>🏠 Home</Link>
                        <Link to="/about" onClick={toggleMobileMenu}>ℹ️ About</Link>
                        <Link to="/services" onClick={toggleMobileMenu}>🚗 Services</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" onClick={toggleMobileMenu}>📊 Dashboard</Link>
                                <div style={{ padding: '0.75rem 1rem', color: 'var(--amber-400)', fontSize: '0.9rem' }}>Hi, {user.fullName}</div>
                                <button onClick={handleLogout} style={{ background: 'linear-gradient(to right, #FBBF24, #F97316)', color: 'black', fontWeight: 700, border: 'none', padding: '0.75rem 1rem', borderRadius: '0.5rem', width: '100%', textAlign: 'left' }}>🚪 Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={toggleMobileMenu}>🔑 Sign In</Link>
                                <Link to="/register" style={{ background: 'linear-gradient(to right, #FBBF24, #F97316)', color: 'black', fontWeight: 700 }} onClick={toggleMobileMenu}>🚀 Get Started</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
