import React, { Suspense } from 'react';
import Category from '../../Category';

const Left = () => {
    return (
        <section className='col-span-3  sticky top-4 h-fit'>
            <h2 className='font-semibold text-primary mb-4'>All Categories</h2>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Category />
            </Suspense>
        </section>
    );
};

export default Left;