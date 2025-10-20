import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
import Latest from '../Latest';

const Header = () => {
    return (
        <header>
            <div className='flex flex-col items-center gap-4 pt-8'>
                <img src={logo} alt="" />
                <p className='text-accent text-xl'>Journalism Without Fear or Favour</p>
                <p className='text-warning font-semibold text-xl'>
                    <span className='text-primary'>{format(new Date(), "EEEE")},</span> {format(new Date(), "MMMM dd, yyyy")}
                </p>
            </div>
            <section>
                <Latest />
            </section>
            <Navbar />
        </header>
    );
};

export default Header;