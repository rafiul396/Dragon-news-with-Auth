import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import star from '../../../../assets/star.png'
import { FaEye } from 'react-icons/fa';

const nbox = ({ n }) => {
    const {author} = n;
    const date = new Date(n.author.published_date).toLocaleDateString()
    return (
        <div className='space-y-3 border-2 border-base-300 rounded-lg'>
            <div className='flex justify-between bg-base-300 items-center px-4 py-1'>
                <div className='flex gap-4'>
                    <img className='w-[50px] h-[50px] bg-red-200 rounded-full' src={author.img} alt={`Image of ${author.name}`} />
                    <div>
                        <h2 className='text-primary font-semibold'>{author.name}</h2>
                        <p className='text-accent'>{date}</p>
                    </div>
                </div>
                <div className='text-2xl flex'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className='space-y-5 px-4'>
                <h2 className='font-bold text-primary'>
                    {n.title}
                </h2>
                <div className='bg-primary w-full h-[250px] rounded-lg'>
                    <img className='rounded-lg w-full h-full object-center' src={n.image_url} alt="" />
                </div>
                <p className='text-accent'>
                    {n.details}
                </p>
                <div className='h-[1px] w-full bg-secondary'></div>
                <div className='flex justify-between items-center pb-5'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-1'>
                            <img className='w-[20px] h-[20px]' src={star} alt="" />
                            <img className='w-[20px] h-[20px]' src={star} alt="" />
                            <img className='w-[20px] h-[20px]' src={star} alt="" />
                            <img className='w-[20px] h-[20px]' src={star} alt="" />
                            <img className='w-[20px] h-[20px]' src={star} alt="" />
                        </div>
                        <p>{n.rating.number}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEye />
                        <p>{n.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nbox;