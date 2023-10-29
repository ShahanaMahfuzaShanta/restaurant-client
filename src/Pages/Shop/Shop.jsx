import React, { useState } from 'react';
import CommonBanner from '../../Components/CommonBanner';
import '../../Components/commonBanner.css'
import SaladCard from './SaladCard';
import PizzaCard from './PizzaCard';
import SoupCard from './SoupCard';
import DessertCard from './DessertCard';
import DrinkCard from './DrinkCard';

const Shop = () => {
    const [activeContent, setActiveContent] = useState('salad');

    const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

    return (
        <>
        <div className='shop-banner py-60'>
        <CommonBanner heading="Our Shop" subHeading="would you like to try a dish?" />
        </div>

        <div className="flex gap-8 mt-16 my-4 justify-center">
          <button
            className={`text-lg uppercase font-semibold ${activeContent === 'salad' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-neutral-900'}`}
            onClick={() => handleContentSwitch('salad')}
          >
            Salad
          </button>
          <button
            className={`text-lg uppercase font-semibold ${activeContent === 'pizza' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-neutral-900'}`}
            onClick={() => handleContentSwitch('pizza')}
          >
            Pizza
          </button>
          <button
            className={`text-lg uppercase font-semibold ${activeContent === 'soup' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-neutral-900'}`}
            onClick={() => handleContentSwitch('soup')}
          >
            Soup
          </button>
          <button
            className={`text-lg uppercase font-semibold ${activeContent === 'dessert' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-neutral-900'}`}
            onClick={() => handleContentSwitch('dessert')}
          >
            Desserts
          </button>
          <button
            className={`text-lg uppercase font-semibold ${activeContent === 'drink' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-neutral-900'}`}
            onClick={() => handleContentSwitch('drink')}
          >
            Drinks
          </button>
        </div>

        <div>
        {activeContent === 'salad' && (
            <SaladCard />
          )}
        {activeContent === 'pizza' && (
            <PizzaCard />
          )}
        {activeContent === 'soup' && (
            <SoupCard />
          )}
        {activeContent === 'dessert' && (
            <DessertCard />
          )}
        {activeContent === 'drink' && (
            <DrinkCard />
          )}
        </div>
        </>
    );
};

export default Shop;