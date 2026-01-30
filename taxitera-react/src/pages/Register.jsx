import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Account created successfully! Please log in to continue.');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (err) {
            setError('Network error. Please check if the server is running.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-bg">
                <img src="/addisababa.png" alt="Addis Ababa" />
                <div className="form-overlay"></div>
            </div>

            <div className="form-card">
                <div className="form-header">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Join TaxiTera</span>
                    </div>
                    <h1 className="form-title">Create Account</h1>
                    <p className="form-subtitle">Start your journey with us</p>
                </div>

                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-input"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone (optional)</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && (
                        <div className="form-error" style={{ display: 'block', color: 'red', marginBottom: '1rem' }}>
                            {error}
                        </div>
                    )}

                    {successMessage && (
                        <div className="form-success" style={{ display: 'block' }}>
                            {successMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="form-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating account...' : 'Create Account'}
                    </button>
                </form>

                <div className="form-footer">
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
