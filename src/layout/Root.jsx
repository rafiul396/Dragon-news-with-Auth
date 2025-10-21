import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Main from '../components/Main/Main';
import Home from '../pages/Home';
import Homelayout from '../components/Main/homelayout/Homelayout';

const Root = () => {
    return (
            <div className='container mx-auto'>
                <Homelayout />
            </div>
    );
};

export default Root;