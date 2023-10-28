import React from 'react';
import img from '../../assets/home/featured.jpg'

import '../FeaturedItem/FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <>
        <div className='featured-item bg-fixed my-20'>
        <div className='bg-neutral-900 bg-opacity-70 py-40'>
        <div className=' w-64 lg:w-96 mx-auto text-center my-10'>
        <p className='lg:text-base text-[#D99904] italic'>---Check It Out---</p>
        <hr className='m-3 border' /> 
        <h2 className='lg:text-3xl uppercase text-white'>from our menu</h2>
        <hr className='m-3 border' />
        </div>
        <div className='flex justify-center items-center w-[900px] mx-auto gap-10'>
            <img className='w-96' src={img} alt="" />
            <div className='text-white'>
                <p className='text-lg'>October 29, 2023</p>
                <p className=' uppercase text-lg'>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="rounded-lg border-b-2 border-gray-800 hover:bg-gray-800 text-center py-2 px-4 text-sm font-semibold uppercase text-white font-['Inter']">Read More</button>
            </div>
        </div>
        </div>
        
        </div>
        </>
    );
};

export default FeaturedItem;