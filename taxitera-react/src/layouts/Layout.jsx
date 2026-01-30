import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children || <Outlet />}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
