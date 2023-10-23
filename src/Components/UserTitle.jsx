import React from 'react';

const UserTitle = ({title, heading}) => {
    return (
        <>
        <div className='w-96 mx-auto text-center my-10'>
        <p className='text-base text-[#D99904] italic'>---{heading}---</p>
        <hr className='m-3 border' /> 
        <h2 className='text-3xl uppercase'>{title}</h2>
        <hr className='m-3 border' />
        </div>
        </>
    );
};

export default UserTitle;