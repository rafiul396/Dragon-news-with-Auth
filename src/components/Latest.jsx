import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-5 font-semibold bg-base-200 p-3 my-8'>
            <p className='text-base-100 bg-secondary py-2 px-4'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='text-primary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid aut rerum in nulla adipisci quae aspernatur dolor laudantium quam.
                </p>
            </Marquee>

        </div>
    );
};

export default Latest;