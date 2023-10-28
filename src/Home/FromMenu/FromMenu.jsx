import React from 'react';
import UserTitle from '../../Components/UserTitle';
import useMenu from '../../Hooks/useMenu';
import ButtonBottomBorder from '../../Components/ButtonBottomBorder';
import MenuCard from '../../Components/menuCard';

const FromMenu = () => {
    const [menu] = useMenu();

      const popularMenu = menu.filter(item => item.category === 'popular')
    return (
        <>
        
        <UserTitle heading="Check it Out" title="From Our Menu" />
        <div className='grid grid-cols-2 w-[900px] mx-auto gap-4'>
            {
                popularMenu?.map(menuItem => ( <MenuCard
                key={menu?._id} menuItem={menuItem}
                ></MenuCard>))
            }
        </div>
        <ButtonBottomBorder buttonTitle="View Full Menu" />
        </>
    );
};

export default FromMenu;