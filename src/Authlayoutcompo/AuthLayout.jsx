import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='container mx-auto'>
                <Navbar />
            </header>
            <main className='container mx-auto flex justify-center items-center min-h-[calc(100vh-72px)]'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;