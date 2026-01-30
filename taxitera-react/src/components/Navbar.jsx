import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if user is on dashboard page
    const isOnDashboard = location.pathname === '/dashboard';

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
                        <Link 
                            to="/" 
                            style={{
                                color: location.pathname === '/' ? '#FBBF24' : 'white',
                                borderBottom: location.pathname === '/' ? '2px solid #FBBF24' : 'none',
                                paddingBottom: '0.25rem'
                            }}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about"
                            style={{
                                color: location.pathname === '/about' ? '#FBBF24' : 'white',
                                borderBottom: location.pathname === '/about' ? '2px solid #FBBF24' : 'none',
                                paddingBottom: '0.25rem'
                            }}
                        >
                            About
                        </Link>
                        <Link 
                            to="/services"
                            style={{
                                color: location.pathname === '/services' ? '#FBBF24' : 'white',
                                borderBottom: location.pathname === '/services' ? '2px solid #FBBF24' : 'none',
                                paddingBottom: '0.25rem'
                            }}
                        >
                            Services
                        </Link>
                        {user ? (
                            <>
                                {!isOnDashboard && (
                                    <Link 
                                        to="/dashboard"
                                        style={{
                                            color: location.pathname === '/dashboard' ? '#FBBF24' : 'white',
                                            borderBottom: location.pathname === '/dashboard' ? '2px solid #FBBF24' : 'none',
                                            paddingBottom: '0.25rem'
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <button onClick={handleLogout} className="btn-primary">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login"
                                    style={{
                                        color: location.pathname === '/login' ? '#FBBF24' : 'white',
                                        borderBottom: location.pathname === '/login' ? '2px solid #FBBF24' : 'none',
                                        paddingBottom: '0.25rem'
                                    }}
                                >
                                    Sign In
                                </Link>
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
                        <Link 
                            to="/" 
                            onClick={toggleMobileMenu}
                            style={{
                                background: location.pathname === '/' ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                                borderLeft: location.pathname === '/' ? '3px solid #FBBF24' : 'none',
                                color: location.pathname === '/' ? '#FBBF24' : 'white'
                            }}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            onClick={toggleMobileMenu}
                            style={{
                                background: location.pathname === '/about' ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                                borderLeft: location.pathname === '/about' ? '3px solid #FBBF24' : 'none',
                                color: location.pathname === '/about' ? '#FBBF24' : 'white'
                            }}
                        >
                            About
                        </Link>
                        <Link 
                            to="/services" 
                            onClick={toggleMobileMenu}
                            style={{
                                background: location.pathname === '/services' ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                                borderLeft: location.pathname === '/services' ? '3px solid #FBBF24' : 'none',
                                color: location.pathname === '/services' ? '#FBBF24' : 'white'
                            }}
                        >
                            Services
                        </Link>
                        {user ? (
                            <>
                                {!isOnDashboard && (
                                    <Link 
                                        to="/dashboard" 
                                        onClick={toggleMobileMenu}
                                        style={{
                                            background: location.pathname === '/dashboard' ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                                            borderLeft: location.pathname === '/dashboard' ? '3px solid #FBBF24' : 'none',
                                            color: location.pathname === '/dashboard' ? '#FBBF24' : 'white'
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <button onClick={handleLogout} style={{ background: 'linear-gradient(to right, #FBBF24, #F97316)', color: 'black', fontWeight: 700, border: 'none', padding: '0.75rem 1rem', borderRadius: '0.5rem', width: '100%', textAlign: 'left' }}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    onClick={toggleMobileMenu}
                                    style={{
                                        background: location.pathname === '/login' ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                                        borderLeft: location.pathname === '/login' ? '3px solid #FBBF24' : 'none',
                                        color: location.pathname === '/login' ? '#FBBF24' : 'white'
                                    }}
                                >
                                    Sign In
                                </Link>
                                <Link to="/register" style={{ background: 'linear-gradient(to right, #FBBF24, #F97316)', color: 'black', fontWeight: 700 }} onClick={toggleMobileMenu}>Get Started</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
