import React from 'react';
import UserTitle from '../../Components/UserTitle';
import { useQuery } from 'react-query';
import axios from 'axios';
import MenuProperty from './MenuProperty';

const FromMenu = () => {
    const { refetch, data: menu = [] } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/menu`);
          console.log(res?.data);
          return res?.data;
        },
      });
    return (
        <>
        
        <UserTitle heading="Check it Out" title="From Our Menu" />
        <div className='grid grid-cols-2 w-[900px] mx-auto'>
            {
                menu?.slice(0, 6).map(menuItem => ( <MenuProperty
                key={menu?._id} menuItem={menuItem}
                ></MenuProperty>))
            }
        </div>
        </>
    );
};

export default FromMenu;