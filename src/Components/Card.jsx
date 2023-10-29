import React from "react";

const Card = ({menuItem}) => {
    const {image, name, recipe} = menuItem
  return (
    <>
      <div className="w-72 h-[400px] bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={image}
            alt={name}
            className=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm font-normal font-['Inter'] leading-5">{recipe}</p>
          <div className="card-actions">
          <div className="mx-auto text-center">
            <button className="w-40 rounded-lg border-b-2 border-yellow-600 py-2 uppercase font-['Inter'] text-sm font-semibold bg-gray-200 hover:bg-gray-800 text-yellow-600">Add to Cart</button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
