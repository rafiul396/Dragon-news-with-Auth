import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newsbox from './Newsbox.jsx/Newsbox';

const Categorynews = () => {
    const { id } = useParams();
    const newsData = useLoaderData();
    const filteredNewsbyId = newsData.filter(news => news.category_id === Number(id))
    console.log(filteredNewsbyId);

    return (
        <div>
            <h2 className='text-primary font-semibold mb-4'>Dragon News Home</h2>
            <div className='space-y-4'>
                {
                    filteredNewsbyId.map(news => <Newsbox news={news} />)
                }
            </div>
        </div>
    );
};

export default Categorynews;