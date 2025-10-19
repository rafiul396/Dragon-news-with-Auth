import React from 'react';
import Left from './homelayout/Left';
import Content from './homelayout/Content';
import Right from './homelayout/right';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <main className='grid grid-cols-12 gap-2'>
            <Left />
            <Outlet />
            <Right />
        </main>
    );
};

export default Main;