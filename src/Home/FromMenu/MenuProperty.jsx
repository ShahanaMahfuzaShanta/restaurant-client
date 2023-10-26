import React from "react";

const MenuProperty = ({ menuItem }) => {
  const { name, image, recipe, price } = menuItem;
  return (
    <div>
      <div className="w-96 bg-base-100 shadow-xl flex">
        <div className="w-40 h-40 ">
          <img className="rounded-tr-full rounded-bl-full rounded-br-full" src={image} alt="" />
          </div>
        <div className="">
          <div className="justify-end">
            <p>{price}</p>
          </div>
          <p>{name}</p>
          <p>{recipe}</p>
        </div>
      </div>
</div>
  );
};

export default MenuProperty;
