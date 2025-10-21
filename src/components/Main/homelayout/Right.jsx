import React from 'react';
import Logbtn from './Logbtn';
import FindUs from './Findus/FindUs';
import QZoon from './Q-Zoon/QZoon';

const Right = () => {
    return (
        <section className='col-span-3  sticky top-4 h-fit'>
            <Logbtn />
            <FindUs />
            <QZoon />
        </section>
    );
};

export default Right;