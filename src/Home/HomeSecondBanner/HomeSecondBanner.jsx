import React from 'react';
import bannerImage from '../../assets/home/chef-service.jpg'

const HomeSecondBanner = () => {
    return (
        <>
        <div className='w-64 lg:w-[900px] mx-auto my-20 relative'>
            <div>
                <img src={bannerImage} alt="" />
            </div>
            <div className='text-center w-[600px] bg-white mx-auto absolute top-12 left-36 p-12 shadow-lg font-[Cinzel]'>
                <h2 className='text-4xl uppercase'>Bistro Boss</h2>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis alias ducimus illo odit iure officia, fugit quaerat necessitatibus ad quasi, omnis, illum aliquid unde.</p>
            </div>
        </div>
        </>
    );
};

export default HomeSecondBanner;