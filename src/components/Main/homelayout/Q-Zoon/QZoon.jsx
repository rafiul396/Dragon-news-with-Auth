import React from 'react';
import swimmingChild from '../../../../assets/swimming.png';
import classRoom from '../../../../assets/class.png';
import playGround from '../../../../assets/playground.png';

const QZoon = () => {
    return (
        <div className='bg-base-200 mt-10 p-4' >
            <h2 className='text-primary font-semibold mb-4'>Q-Zone</h2>
            <div className='space-y-4 flex flex-col'>
                <img src={swimmingChild} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZoon;