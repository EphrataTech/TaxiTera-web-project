import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token, data.user);
                navigate('/dashboard');
            } else {
                setError(data.error || 'Login failed');
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
                        <span className="badge-text">Welcome Back</span>
                    </div>
                    <h1 className="form-title">Sign In</h1>
                    <p className="form-subtitle">Access your TaxiTera account</p>
                </div>

                <form onSubmit={handleLogin}>
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
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
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

                    <button
                        type="submit"
                        className="form-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="form-footer">
                    <p>
                        New here? <Link to="/register">Create an account</Link>
                    </p>
                    <p style={{ marginTop: '0.5rem' }}>
                        <Link to="/reset-password">Forgot your password?</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
