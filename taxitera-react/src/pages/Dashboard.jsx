import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const [selectedVehicle, setSelectedVehicle] = useState('minibus');
    const [formData, setFormData] = useState({
        pickup: { address: '', lat: 0, lng: 0 },
        destination: { address: '', lat: 0, lng: 0 },
        scheduledTime: ''
    });
    const [bookings, setBookings] = useState([]);
    const [notification, setNotification] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('book');

    const vehicles = [
        { 
            id: 'minibus', 
            name: 'Minibus', 
            price: 15, 
            capacity: 12, 
            icon: '🚐',
            description: 'Perfect for small groups'
        },
        { 
            id: 'higer', 
            name: 'Higer', 
            price: 12, 
            capacity: 45, 
            icon: '🚌',
            description: 'Comfortable mid-size bus'
        },
        { 
            id: 'bus', 
            name: 'Bus', 
            price: 10, 
            capacity: 50, 
            icon: '🚍',
            description: 'Large capacity transport'
        }
    ];

    const getPrice = () => {
        const vehicle = vehicles.find(v => v.id === selectedVehicle);
        const basePrice = vehicle ? vehicle.price : 15;
        // Simple distance calculation (mock)
        return basePrice * 2; // Assume 2x multiplier for distance
    };

    const fetchBookings = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/bookings', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setBookings(data.bookings);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleInputChange = (field, value) => {
        if (field === 'pickupAddress') {
            setFormData(prev => ({
                ...prev,
                pickup: { ...prev.pickup, address: value, lat: 9.0192 + Math.random() * 0.1, lng: 38.7525 + Math.random() * 0.1 }
            }));
        } else if (field === 'destinationAddress') {
            setFormData(prev => ({
                ...prev,
                destination: { ...prev.destination, address: value, lat: 9.0192 + Math.random() * 0.1, lng: 38.7525 + Math.random() * 0.1 }
            }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleBook = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const token = localStorage.getItem('token');
            const bookingData = {
                pickup: formData.pickup,
                destination: formData.destination,
                fare: getPrice(),
                scheduledTime: formData.scheduledTime ? new Date(formData.scheduledTime).toISOString() : undefined
            };

            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(bookingData)
            });

            const data = await response.json();
            
            if (response.ok) {
                setNotification({ type: 'success', message: 'Booking created successfully!' });
                setFormData({
                    pickup: { address: '', lat: 0, lng: 0 },
                    destination: { address: '', lat: 0, lng: 0 },
                    scheduledTime: ''
                });
                fetchBookings(); // Refresh bookings
            } else {
                setNotification({ type: 'error', message: data.error || 'Booking failed' });
            }
        } catch (error) {
            setNotification({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
            setTimeout(() => setNotification(null), 3000);
        }
    };

    return (
        <div className="page">
            <div className="page-bg">
                <img src="/addisababa.png" alt="Addis Ababa" />
                <div className="page-overlay"></div>
            </div>

            <div className="page-content">
                <div className="page-container">
                    <div className="page-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ 
                                width: '50px', 
                                height: '50px', 
                                borderRadius: '50%', 
                                background: '#374151',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                {user?.fullName?.charAt(0) || 'U'}
                            </div>
                            <div>
                                <h1 className="page-title" style={{ margin: 0 }}>
                                    Welcome back, <span className="gradient">{user?.fullName?.split(' ')[0] || 'User'}</span>
                                </h1>
                                <p className="page-description" style={{ margin: '0.5rem 0 0 0' }}>
                                    Manage your bookings and account
                                </p>
                            </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{bookings.length}</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Total Trips</div>
                            </div>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>$0</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Total Spent</div>
                            </div>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5.0</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Rating</div>
                            </div>
                        </div>

                        {/* Tab Navigation */}
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '1rem'
                        }}>
                            <button
                                onClick={() => setActiveTab('book')}
                                style={{
                                    background: activeTab === 'book' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                    color: activeTab === 'book' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Book Ride
                            </button>
                            <button
                                onClick={() => setActiveTab('history')}
                                style={{
                                    background: activeTab === 'history' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                    color: activeTab === 'history' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Trip History
                            </button>
                            <button
                                onClick={() => setActiveTab('profile')}
                                style={{
                                    background: activeTab === 'profile' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                    color: activeTab === 'profile' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Profile
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'book' && (
                        <div className="page-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <h2 className="page-card-title">Book Your Ride</h2>

                            <form onSubmit={handleBook}>
                                {/* Vehicle Selection */}
                                <div className="form-group">
                                    <label className="form-label">Select Vehicle Type</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                                        {vehicles.map(v => (
                                            <div
                                                key={v.id}
                                                onClick={() => setSelectedVehicle(v.id)}
                                                style={{
                                                    padding: '1rem',
                                                    border: `1px solid ${selectedVehicle === v.id ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'}`,
                                                    borderRadius: '6px',
                                                    background: selectedVehicle === v.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                                                    cursor: 'pointer',
                                                    textAlign: 'center',
                                                    color: 'white',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{v.name}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>{v.description}</div>
                                                <div style={{ fontWeight: 'bold' }}>${v.price}/base</div>
                                                <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>Capacity: {v.capacity}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Pickup Location</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        required
                                        placeholder="e.g. Bole Airport, Addis Ababa"
                                        value={formData.pickup.address}
                                        onChange={e => handleInputChange('pickupAddress', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Destination</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        required
                                        placeholder="e.g. Piassa, Addis Ababa"
                                        value={formData.destination.address}
                                        onChange={e => handleInputChange('destinationAddress', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Schedule Time (Optional)</label>
                                    <input
                                        type="datetime-local"
                                        className="form-input"
                                        value={formData.scheduledTime}
                                        onChange={e => handleInputChange('scheduledTime', e.target.value)}
                                        min={new Date().toISOString().slice(0, 16)}
                                    />
                                </div>

                                <div style={{ 
                                    marginTop: '1.5rem', 
                                    padding: '1.5rem', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '6px', 
                                    marginBottom: '1.5rem',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', marginBottom: '0.5rem' }}>
                                        <span>Estimated Price:</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>${getPrice()}</span>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                        Final price may vary based on actual route distance and traffic conditions
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="form-submit" 
                                    disabled={loading}
                                    style={{
                                        opacity: loading ? 0.7 : 1,
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {loading ? 'Creating Booking...' : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Trip History Tab */}
                    {activeTab === 'history' && (
                        <div className="page-card">
                            <h2 className="page-card-title">Trip History</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {bookings.length > 0 ? (
                                    bookings.map(booking => (
                                        <div key={booking._id} style={{ 
                                            padding: '1.5rem', 
                                            border: '1px solid rgba(255,255,255,0.1)', 
                                            borderRadius: '6px', 
                                            background: 'rgba(255,255,255,0.05)'
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>${booking.fare}</span>
                                                <span style={{ 
                                                    color: booking.status === 'pending' ? '#fbbf24' : 
                                                           booking.status === 'confirmed' ? '#10b981' : 
                                                           booking.status === 'completed' ? '#06b6d4' : '#ef4444',
                                                    fontSize: '0.9rem',
                                                    textTransform: 'capitalize',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '4px',
                                                    background: 'rgba(255,255,255,0.1)',
                                                    fontWeight: '500'
                                                }}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>
                                                <span>{booking.pickup.address}</span>
                                                <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.5)' }}>→</span>
                                                <span>{booking.destination.address}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                                                    {new Date(booking.bookingTime).toLocaleDateString('en-US', { 
                                                        weekday: 'short', 
                                                        year: 'numeric', 
                                                        month: 'short', 
                                                        day: 'numeric' 
                                                    })}
                                                </div>
                                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                                                    {new Date(booking.bookingTime).toLocaleTimeString('en-US', { 
                                                        hour: '2-digit', 
                                                        minute: '2-digit' 
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ 
                                        textAlign: 'center', 
                                        color: 'rgba(255,255,255,0.5)', 
                                        fontSize: '1rem', 
                                        padding: '3rem',
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '6px',
                                        border: '1px dashed rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{ marginBottom: '0.5rem', fontWeight: '600' }}>No trips yet</div>
                                        <div>Book your first ride to see your trip history here</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="page-card">
                                <h3 className="page-card-title">Profile Information</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '6px'
                                    }}>
                                        <div style={{ 
                                            width: '50px', 
                                            height: '50px', 
                                            borderRadius: '50%', 
                                            background: '#374151',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '18px'
                                        }}>
                                            {user?.fullName?.charAt(0) || 'U'}
                                        </div>
                                        <div>
                                            <div style={{ color: 'white', fontWeight: 'bold' }}>{user?.fullName || 'Loading...'}</div>
                                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>TaxiTera Member</div>
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Email</div>
                                            <div style={{ color: 'white' }}>{user?.email || 'Loading...'}</div>
                                        </div>
                                        
                                        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Phone</div>
                                            <div style={{ color: 'white' }}>{user?.phone || 'Not provided'}</div>
                                        </div>
                                        
                                        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Total Bookings</div>
                                            <div style={{ color: 'white', fontWeight: 'bold' }}>{bookings.length}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="page-card">
                                <h3 className="page-card-title">Account Settings</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <button style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={e => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                    onMouseLeave={e => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        Edit Profile
                                    </button>
                                    
                                    <button style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={e => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                    onMouseLeave={e => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        Payment Methods
                                    </button>
                                    
                                    <button style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={e => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                    onMouseLeave={e => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        Notifications
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Toast Notification */}
            {notification && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000,
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    background: notification.type === 'success' ? '#10b981' : '#ef4444',
                    color: 'white',
                    fontWeight: '500',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    animation: 'slideIn 0.3s ease-out',
                    maxWidth: '400px'
                }}>
                    {notification.message}
                </div>
            )}
            
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Dashboard;
