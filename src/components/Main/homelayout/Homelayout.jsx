import React from 'react';
import Header from '../../Header/Header';
import Left from './Left';
import Right from './right';
import { Outlet } from 'react-router';

const Homelayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='grid grid-cols-12 gap-2'>
                <Left />
                <section className='col-span-6'>
                    <Outlet />
                </section>
                <Right />
            </main>
        </>
    );
};

export default Homelayout;