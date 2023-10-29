import React from 'react';

const ButtonBottomBorder = ({buttonTitle}) => {
    return (
        <div className="my-10 grid justify-items-center">
            <button className="rounded-lg border-b-2 border-gray-800 text-center py-2 px-4 text-sm font-semibold uppercase text-gray-800 font-['Inter']">{buttonTitle}</button>
        </div>
    );
};

export default ButtonBottomBorder;