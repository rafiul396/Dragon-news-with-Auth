import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Main from '../components/Main/Main';
import Home from '../pages/Home';

const Root = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default Root;