import React from 'react';
import './commonBanner.css'

const CommonBanner = ({heading, subHeading}) => {
    return (
        <>
        
            <div className="text-center text-white uppercase font-['Cinzel'] w-[900px] mx-auto bg-neutral-900 bg-opacity-60 px-10 py-20">
                <p className='text-4xl font-semibold mb-2'>{heading}</p>
                <p>{subHeading}</p>
            </div>
        
        </>
    );
};

export default CommonBanner;