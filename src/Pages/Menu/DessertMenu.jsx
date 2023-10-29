import React from 'react';
import CommonBanner from '../../Components/CommonBanner';
import '../../Components/commonBanner.css'
import MenuCard from '../../Components/menuCard';
import ButtonBottomBorder from '../../Components/ButtonBottomBorder';
import useMenu from '../../Hooks/useMenu';

const DessertMenu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'dessert')
    return (
        <>
        <div className='dessert-banner py-60'>
        <CommonBanner heading="Desserts" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className='w-[900px] mx-auto grid grid-cols-2 gap-5 my-16'>
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
        </>
    );
};

export default DessertMenu;