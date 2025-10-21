import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newsbox from './Newsbox.jsx/Newsbox';

const Categorynews = () => {
    const [news, setNews] = useState([])
    const { id } = useParams();    
    const newsData = useLoaderData();
    
    useEffect(() => {        
        if (id == "0") {
            setNews(newsData);
            return
        } else if (id == "1") {
            const filteredNewsbyId = newsData.filter(news => news.others.is_today_pick === true);
            setNews(filteredNewsbyId);
            return
        }
        const filteredNewsbyId = newsData.filter(news => news.category_id === Number(id))
        setNews(filteredNewsbyId)
    }, [newsData, id])

    return (
        <div>
            <h2 className='text-primary font-semibold mb-4'>Dragon News Home</h2>
            <div className='space-y-10'>
                {
                    news.map(n => <Newsbox n={n} />)
                }
            </div>
        </div>
    );
};

export default Categorynews;