import React from 'react';
import UserTitle from '../../Components/UserTitle';
import useMenu from '../../Hooks/useMenu';
import Card from '../../Components/Card';

const ChefRecommend = () => {
    const [menu] = useMenu();

      const chefRecommend = menu.filter(item => item.category === 'chefRecommend')
    return (
        <>
        <UserTitle heading="Should Try" title="Chef Recommends" />
        <div className='grid grid-cols-3 gap-5 w-[900px] mx-auto'>
            {
                chefRecommend?.map(menuItem => (
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

export default ChefRecommend;