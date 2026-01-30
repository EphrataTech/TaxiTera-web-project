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

    const vehicles = [
        { id: 'minibus', name: 'Minibus', price: 15, capacity: 12 },
        { id: 'higer', name: 'Higer', price: 12, capacity: 45 },
        { id: 'bus', name: 'Bus', price: 10, capacity: 50 }
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
                        <h1 className="page-title">
                            User <span className="gradient">Dashboard</span>
                        </h1>
                        <p className="page-description">
                            Book your next ride and manage your trips.
                        </p>
                    </div>

                    <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Booking Form */}
                        <div className="page-card">
                            <h2 className="page-card-title">Book a Ride</h2>

                            {notification && (
                                <div className={`form-${notification.type}`} style={{ display: 'block', marginBottom: '1rem' }}>
                                    {notification.message}
                                </div>
                            )}

                            <form onSubmit={handleBook}>
                                {/* Vehicle Selection */}
                                <div className="form-group">
                                    <label className="form-label">Select Vehicle</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                        {vehicles.map(v => (
                                            <div
                                                key={v.id}
                                                onClick={() => setSelectedVehicle(v.id)}
                                                style={{
                                                    padding: '0.5rem',
                                                    border: `1px solid ${selectedVehicle === v.id ? 'var(--amber-400)' : 'rgba(255,255,255,0.2)'}`,
                                                    borderRadius: '0.5rem',
                                                    background: selectedVehicle === v.id ? 'rgba(251, 191, 36, 0.1)' : 'transparent',
                                                    cursor: 'pointer',
                                                    textAlign: 'center',
                                                    color: 'white'
                                                }}
                                            >
                                                <div style={{ fontWeight: 'bold' }}>{v.name}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>${v.price}/base</div>
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
                                        placeholder="e.g. Bole Airport"
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
                                        placeholder="e.g. Piassa"
                                        value={formData.destination.address}
                                        onChange={e => handleInputChange('destinationAddress', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Scheduled Time (Optional)</label>
                                    <input
                                        type="datetime-local"
                                        className="form-input"
                                        value={formData.scheduledTime}
                                        onChange={e => handleInputChange('scheduledTime', e.target.value)}
                                    />
                                </div>

                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginBottom: '0.5rem' }}>
                                        <span>Estimated Price:</span>
                                        <span style={{ color: 'var(--amber-400)', fontWeight: 'bold' }}>${getPrice()}</span>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                        *Final price may vary based on route distance
                                    </div>
                                </div>

                                <button type="submit" className="form-submit" disabled={loading}>
                                    {loading ? 'Creating Booking...' : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>

                        {/* Recent Activity / Status */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="page-card">
                                <h3 className="page-card-title">My Bookings</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {bookings.length > 0 ? (
                                        bookings.map(booking => (
                                            <div key={booking._id} style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                    <span style={{ color: 'var(--amber-400)', fontWeight: 'bold' }}>${booking.fare}</span>
                                                    <span style={{ 
                                                        color: booking.status === 'pending' ? '#fbbf24' : 
                                                               booking.status === 'confirmed' ? '#10b981' : 
                                                               booking.status === 'completed' ? '#06b6d4' : '#ef4444',
                                                        fontSize: '0.9rem',
                                                        textTransform: 'capitalize'
                                                    }}>{booking.status}</span>
                                                </div>
                                                <div style={{ color: 'white', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                                    {booking.pickup.address} → {booking.destination.address}
                                                </div>
                                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                                                    {new Date(booking.bookingTime).toLocaleDateString()} • {new Date(booking.bookingTime).toLocaleTimeString()}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', padding: '1rem' }}>
                                            No bookings yet. Create your first booking above!
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="page-card">
                                <h3 className="page-card-title">Profile Summary</h3>
                                <div style={{ color: 'white' }}>
                                    <div style={{ marginBottom: '0.5rem' }}><strong>Name:</strong> {user?.fullName || 'Loading...'}</div>
                                    <div style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> {user?.email || 'Loading...'}</div>
                                    <div style={{ marginBottom: '1rem' }}><strong>Phone:</strong> {user?.phone || 'Not provided'}</div>
                                    <div style={{ marginBottom: '1rem' }}><strong>Total Bookings:</strong> {bookings.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
