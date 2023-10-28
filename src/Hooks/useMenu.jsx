import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useMenu = () => {
    const { refetch, data: menu = [] } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/menu`);
          console.log(res?.data);
          return res?.data;
        },
      });
    return [menu, refetch]
};

export default useMenu;