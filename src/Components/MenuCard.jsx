import React from 'react';

const MenuCard = ({menuItem}) => {
    const { name, image, recipe, price } = menuItem;
  return (
    <div>
      <div className="flex gap-2">
        <img className="w-[100px] rounded-tr-full rounded-bl-full rounded-br-full" src={image} alt="" />
        <div className="">
          <p className="text-neutral-900 uppercase font-['Cinzel']">{name} ------------</p>
          <p className="text-neutral-500 text-sm font-normal font-['Inter'] leading-5">{recipe}</p>
        </div>
            <p className="text-yellow-600 font-['Inter']">${price}</p>
          
      </div>
</div>
  );
};

export default MenuCard;