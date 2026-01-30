import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');

        // Simulate reset
        setTimeout(() => {
            setIsLoading(false);
            setSuccessMessage('Password reset link has been sent to your email. Please check your inbox.');
        }, 1000);
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
                        <span className="badge-text">Password Reset</span>
                    </div>
                    <h1 className="form-title">Reset Password</h1>
                    <p className="form-subtitle">Enter your email to receive a password reset link</p>
                </div>

                <form onSubmit={handleReset}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

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
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className="form-footer">
                    <p>
                        Remember your password? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
