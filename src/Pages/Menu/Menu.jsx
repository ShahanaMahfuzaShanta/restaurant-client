import React from 'react';
import CommonBanner from '../../Components/CommonBanner';
import UserTitle from '../../Components/UserTitle';
import useMenu from '../../Hooks/useMenu';
import MenuCard from '../../Components/menuCard';
import ButtonBottomBorder from '../../Components/ButtonBottomBorder';
import '../../Components/commonBanner.css'
import DessertMenu from './DessertMenu';
import PizzaMenu from './PizzaMenu';
import SaladMenu from './SaladMenu';
import SoupMenu from './SoupMenu';

const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offered')
    return (
        <>
        <div className='banner1 py-60'>
        <CommonBanner heading="Our Menu" subHeading="would you like to try a dish?" />
        </div>
        <UserTitle heading="Don't Miss" title="today's offer" />
        <div className='w-[900px] mx-auto grid grid-cols-2 gap-5'>
            {
                offer?.map(offerItem => (
                    <MenuCard
                    key={offerItem?._id}
                    menuItem={offerItem}
                    >

                    </MenuCard>
                ))
            }
        </div>
        <ButtonBottomBorder buttonTitle="ORDER YOUR FAVOURITE FOOD" />
        <DessertMenu />
        <PizzaMenu />
        <SaladMenu />
        <SoupMenu />
        </>
    );
};

export default Menu;