import React from 'react';

const UserTitle = ({title, heading}) => {
    return (
        <>
        <div className=' w-64 lg:w-96 mx-auto text-center my-10'>
        <p className='lg:text-base text-[#D99904] italic capitalize'>---{heading}---</p>
        <hr className='m-3 border' /> 
        <h2 className='lg:text-3xl uppercase'>{title}</h2>
        <hr className='m-3 border' />
        </div>
        </>
    );
};

export default UserTitle;