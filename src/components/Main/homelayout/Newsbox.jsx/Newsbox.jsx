import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import star from '../../../../assets/star.png'
import { FaEye } from 'react-icons/fa';

const Newsbox = () => {
    return (
        <div className='space-y-3 border-2 border-base-300 rounded-lg'>
            <div className='flex justify-between bg-base-300 items-center px-4 py-1'>
                <div className='flex'>
                    <img className='w-[50px] h-[50px] bg-red-200 rounded-full' src="" alt="" />
                    <div>
                        <h2>Md. Rafiul</h2>
                        <p>2025-06-23</p>
                    </div>
                </div>
                <div className='text-2xl flex'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className='space-y-5 px-4'>
                <h2 className='font-bold text-primary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit!
                </h2>
                <div className='bg-primary w-full h-[230px] rounded-lg'>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut animi atque neque ut aspernatur amet adipisci veritatis, itaque facere autem quo recusandae, nostrum veniam aperiam ipsa laboriosam tempore magni distinctio maiores deleniti! Nostrum veritatis accusamus, voluptatem velit sunt ex?
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
                        <p>4.9</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEye />
                        <p>499</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsbox;