import React from 'react';
import useMenu from '../../Hooks/useMenu';
import Card from '../../Components/Card';

const SoupCard = () => {
    const [menu] = useMenu();
    const menuCard = menu.filter(item => item.category === 'soup')
    return (
        <>
        <div className='grid grid-cols-3 gap-5 w-[900px] mx-auto my-12'>
            {
                menuCard?.map(menuItem => (
                    <Card 
                    key={menuItem?._id} 
                    menuItem={menuItem}
                    >
                    </Card>
                ))
            }
        </div>
        </>
    );
};

export default SoupCard;